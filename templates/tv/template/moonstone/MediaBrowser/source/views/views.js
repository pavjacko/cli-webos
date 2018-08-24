enyo.kind({
	name: "myapp.MainView",
	kind: "moon.Panels",
	pattern: "activity",
	classes: "moon enyo-fit",
	components: [
		{kind: "moon.Panel", title:"Media List", headerComponents: [
			{kind: "moon.ToggleButton", content:"Selection", name:"selectionToggle"},
			{kind: "moon.ToggleButton", content:"MultiSelect", name:"multiSelectToggle"},
			{kind: "moon.Button", content:"Refresh", ontap:"refreshItems"},
			{kind: "moon.ContextualPopupDecorator", components: [
				{kind: "moon.ContextualPopupButton", content:"Popup List"},
				{kind: "moon.ContextualPopup", classes:"moon-6h moon-8v", components: [
					{kind:"moon.DataList", components: [
						{kind:"moon.CheckboxItem", bindings: [
							{from:".model.text", to:".content"}
						]}
					]}
				]}
			]}
		], components: [
			{kind: "FittableColumns", fit: true, components: [
				{
					name: "category",
					kind: "enyo.Group",
					classes: "moon-6h", 
					components: [
						{kind: "moon.SelectableItem", content: "video", selected: true},
						{kind: "moon.SelectableItem", content: "music"},
						{kind: "moon.SelectableItem", content: "photo"}
					],
					onActivate: "changeList"
				},
				{name: "gridList", fit: true, spacing: 20, minWidth: 180, minHeight: 270, kind: "moon.DataGridList", scrollerOptions: { kind: "moon.Scroller", vertical:"scroll", horizontal: "hidden", spotlightPagingControls: true }, components: [
					{ kind: "myapp.GridSampleItem" }
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
		this.set("collection", new enyo.Collection());
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

enyo.kind({
	name: "myapp.GridSampleItem",
	kind: "moon.GridListImageItem",
	mixins: ["moon.SelectionOverlaySupport"],
	selectionOverlayVerticalOffset: 35,
	subCaption: "Sub Caption",
	bindings: [
		{from: ".model.text", to: ".caption"},
		{from: ".model.subText", to: ".subCaption"},
		{from: ".model.url", to: ".source"}
	]
});