var kind = require('enyo/kind'),
    Panels = require('moonstone/Panels'),
    Item = require('moonstone/Item');    

module.exports = kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit",
	components: [
		{name: "panels", kind: Panels, pattern: "activity", classes: "enyo-fit", components: [
			{title: "First", components: [
				{kind: Item, content: "Item One", ontap: "next"},
				{kind: Item, content: "Item Two", ontap: "next"},
				{kind: Item, content: "Item Three", ontap: "next"},
				{kind: Item, content: "Item Four", ontap: "next"},
				{kind: Item, content: "Item Five", ontap: "next"}
			]},
			{title: "Second", joinToPrev: true, components: [
				{kind: Item, content: "Item One", ontap: "next"},
				{kind: Item, content: "Item Two", ontap: "next"},
				{kind: Item, content: "Item Three", ontap: "next"},
				{kind: Item, content: "Item Four", ontap: "next"},
				{kind: Item, content: "Item Five", ontap: "next"}
			]},
			{title: "Third", components: [
				{kind: Item, content: "Item One", ontap: "next"},
				{kind: Item, content: "Item Two", ontap: "next"},
				{kind: Item, content: "Item Three", ontap: "next"},
				{kind: Item, content: "Item Four", ontap: "next"},
				{kind: Item, content: "Item Five", ontap: "next"}
			]},
			{title: "Fourth", joinToPrev: true, components: [
				{kind: Item, content: "Item One", ontap: "next"},
				{kind: Item, content: "Item Two", ontap: "next"},
				{kind: Item, content: "Item Three", ontap: "next"},
				{kind: Item, content: "Item Four", ontap: "next"},
				{kind: Item, content: "Item Five", ontap: "next"}
			]},
			{title: "Fifth", joinToPrev: true, components: [
				{kind: Item, content: "Item One", ontap: "next"},
				{kind: Item, content: "Item Two", ontap: "next"},
				{kind: Item, content: "Item Three", ontap: "next"},
				{kind: Item, content: "Item Four", ontap: "next"},
				{kind: Item, content: "Item Five", ontap: "next"}
			]},
			{title: "Sixth", components: [
				{kind: Item, content: "Item One", ontap: "next"},
				{kind: Item, content: "Item Two", ontap: "next"},
				{kind: Item, content: "Item Three", ontap: "next"},
				{kind: Item, content: "Item Four", ontap: "next"},
				{kind: Item, content: "Item Five", ontap: "next"}
			]},
			{title: "Seventh", joinToPrev: true, components: [
				{kind: Item, content: "Item One", ontap: "next"},
				{kind: Item, content: "Item Two", ontap: "next"},
				{kind: Item, content: "Item Three", ontap: "next"},
				{kind: Item, content: "Item Four", ontap: "next"},
				{kind: Item, content: "Item Five", ontap: "next"}
			]}
		]}
	],
	next: function(inSender, inEvent) {
		this.$.panels.next();
		return true;
	}
});
