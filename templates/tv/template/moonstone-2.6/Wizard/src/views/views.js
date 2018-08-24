var kind = require('enyo/kind'),
    Panels = require('moonstone/Panels'),
    Button = require('moonstone/Button'),
    CardArranger = require('layout/CardArranger'),
    Item = require('moonstone/Item');

module.exports = kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit",
	components: [
		{name: "panels", kind: Panels, arrangerKind: CardArranger, classes: "enyo-fit full", components: [
			{title: "Wizard Step 1", headerComponents: [
				{kind: Button, content: "next", ontap: "next"},
			], components: [
				{kind: Item, content: "Item One"},
				{kind: Item, content: "Item Two"},
				{kind: Item, content: "Item Three"},
				{kind: Item, content: "Item Four"},
				{kind: Item, content: "Item Five"}
			]},
			{title: "Wizard Step 2", headerComponents: [
				{kind: Button, content: "back", ontap: "prev"},
				{kind: Button, content: "next", ontap: "next"}
			], components: [
				{kind: Item, content: "Item One"},
				{kind: Item, content: "Item Two"},
				{kind: Item, content: "Item Three"},
				{kind: Item, content: "Item Four"},
				{kind: Item, content: "Item Five"}
			]},
			{title: "Wizard Step 3", headerComponents: [
				{kind: Button, content: "back", ontap: "prev"},
				{kind: Button, content: "next", ontap: "next"}
			], components: [
				{kind: Item, content: "Item One"},
				{kind: Item, content: "Item Two"},
				{kind: Item, content: "Item Three"},
				{kind: Item, content: "Item Four"},
				{kind: Item, content: "Item Five"}
			]},
			{title: "Wizard Summary", headerComponents: [
				{kind: Button, content: "back", ontap: "prev"},
				{kind: Button, content: "done"}
			], components: [
				{kind: Item, content: "Item One"},
				{kind: Item, content: "Item Two"},
				{kind: Item, content: "Item Three"},
				{kind: Item, content: "Item Four"},
				{kind: Item, content: "Item Five"}
			]}
		]}
	],
	prev: function(inSender, inEvent) {
		this.$.panels.previous();
		return true;
	},
	next: function(inSender, inEvent) {
		this.$.panels.next();
		return true;
	}
});
