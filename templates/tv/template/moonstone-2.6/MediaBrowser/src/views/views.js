var kind = require('enyo/kind'),
    Panels = require('moonstone/Panels'),
    Panel = require('moonstone/Panel'),
    ToggleButton = require('moonstone/ToggleButton'),
    Button = require('moonstone/Button'),
    ContextualPopupDecorator = require('moonstone/ContextualPopupDecorator'),
    ContextualPopupButton = require('moonstone/ContextualPopupButton'),
    ContextualPopup = require('moonstone/ContextualPopup'),
    DataList = require('moonstone/DataList'),
    CheckboxItem = require('moonstone/CheckboxItem'),
    Group = require('enyo/Group'),
    SelectableItem = require('moonstone/SelectableItem'),
    DataGridList = require('moonstone/DataGridList'),
    Scroller = require('moonstone/Scroller'),
    Overlay = require('moonstone/Overlay'),
    FittableColumns = require('layout/FittableColumns'),
    Collection = require('enyo/Collection'),
    GridListImageItem = require('moonstone/GridListImageItem');

var GridSampleItem = kind({
	name: "myapp.GridSampleItem",
	kind: GridListImageItem,
	mixins: [Overlay],
	selectionOverlayVerticalOffset: 35,
	subCaption: "Sub Caption",
	bindings: [
		{from: ".model.text", to: ".caption"},
		{from: ".model.subText", to: ".subCaption"},
		{from: ".model.url", to: ".source"}
	]
});

module.exports = kind({
	name: "myapp.MainView",
	kind: Panels,
	pattern: "activity",
	classes: "moon enyo-fit",
	components: [
		{kind: Panel, title:"Media List", headerComponents: [
			{kind: ToggleButton, content:"Selection", name:"selectionToggle"},
			{kind: ToggleButton, content:"MultiSelect", name:"multiSelectToggle"},
			{kind: Button, content:"Refresh", ontap:"refreshItems"},
			{kind: ContextualPopupDecorator, components: [
				{kind: ContextualPopupButton, content:"Popup List"},
				{kind: ContextualPopup, classes:"moon-6h moon-8v", components: [
					{kind:DataList, components: [
						{kind:CheckboxItem, bindings: [
							{from:".model.text", to:".content"}
						]}
					]}
				]}
			]}
		], components: [
			{kind: FittableColumns, fit: true, components: [
				{
					name: "category",
					kind: Group,
					classes: "moon-6h", 
					components: [
						{kind: SelectableItem, content: "video", selected: true},
						{kind: SelectableItem, content: "music"},
						{kind: SelectableItem, content: "photo"}
					],
					onActivate: "changeList"
				},
				{name: "gridList", fit: true, spacing: 20, minWidth: 180, minHeight: 270, kind: DataGridList, scrollerOptions: { kind: Scroller, vertical:"scroll", horizontal: "hidden", spotlightPagingControls: true }, components: [
					{ kind: GridSampleItem }
				]}
			]}
		]}
	],
	bindings: [
		{from: ".collection", to: ".$.dataList.collection"},
		{from: ".collection", to: ".$.gridList.collection"},
		{from: ".$.selectionToggle.value", to:".$.gridList.selection"},
		{from: ".$.multiSelectToggle.value", to:".$.gridList.multipleSelection"}
	],
	create: function () {
		this.inherited(arguments);
		// we set the collection that will fire the binding and add it to the list
		this.set("collection", new Collection());
	},
	generateRecords: function (category, count) {
		var records = [],
			idx     = 0;
		for (; records.length < count; ++idx) {
			var title = idx + " " + category;
			var subTitle = (idx % 8 === 0) ? "Lorem ipsum dolor sit amet" : "Subtitle";
			records.push({
				text: title,
				subText: subTitle,
				url: "http://placehold.it/300x300/" + Math.floor(Math.random()*0x1000000).toString(16) + "/ffffff&text=" + title
			});
		}
		return records;
	},
	refreshItems: function (inSender, inEvent) {
		// we fetch our collection reference
		var collection = this.get("collection");
		// we now remove all of the current records from the collection
		collection.remove(collection.records);
		// and we insert all new records that will update the list
		collection.add(this.generateRecords(this.$.category.active.getContent(), 50));
	},
	changeList: function(inSender, inEvent) {
		if (inEvent.originator.getActive()) {
			this.refreshItems();
		}
	}
});


