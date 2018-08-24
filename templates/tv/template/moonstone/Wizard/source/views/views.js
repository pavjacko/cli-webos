enyo.kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit",
	components: [
		{name: "panels", kind: "moon.Panels", arrangerKind: "CardArranger", classes: "enyo-fit full", components: [
			{title: "Wizard Step 1", headerComponents: [
				{kind: "moon.Button", content: "next", ontap: "next"},
			], components: [
				{kind: "moon.Item", content: "Item One"},
				{kind: "moon.Item", content: "Item Two"},
				{kind: "moon.Item", content: "Item Three"},
				{kind: "moon.Item", content: "Item Four"},
				{kind: "moon.Item", content: "Item Five"}
			]},
			{title: "Wizard Step 2", headerComponents: [
				{kind: "moon.Button", content: "back", ontap: "prev"},
				{kind: "moon.Button", content: "next", ontap: "next"}
			], components: [
				{kind: "moon.Item", content: "Item One"},
				{kind: "moon.Item", content: "Item Two"},
				{kind: "moon.Item", content: "Item Three"},
				{kind: "moon.Item", content: "Item Four"},
				{kind: "moon.Item", content: "Item Five"}
			]},
			{title: "Wizard Step 3", headerComponents: [
				{kind: "moon.Button", content: "back", ontap: "prev"},
				{kind: "moon.Button", content: "next", ontap: "next"}
			], components: [
				{kind: "moon.Item", content: "Item One"},
				{kind: "moon.Item", content: "Item Two"},
				{kind: "moon.Item", content: "Item Three"},
				{kind: "moon.Item", content: "Item Four"},
				{kind: "moon.Item", content: "Item Five"}
			]},
			{title: "Wizard Summary", headerComponents: [
				{kind: "moon.Button", content: "back", ontap: "prev"},
				{kind: "moon.Button", content: "done"}
			], components: [
				{kind: "moon.Item", content: "Item One"},
				{kind: "moon.Item", content: "Item Two"},
				{kind: "moon.Item", content: "Item Three"},
				{kind: "moon.Item", content: "Item Four"},
				{kind: "moon.Item", content: "Item Five"}
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