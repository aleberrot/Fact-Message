const facts = {
	1: {
		1: 'Are you aware',
		2: 'Do you have any idea',
		3: 'Weren\'t you told',
		4: 'Have you been told',
		5: 'Did someone let you know',
		6: 'Have you been informed',
		7: 'Were you aware',
		8: 'Hadn\'t you realized',
		9: 'Have you heard',
		10: 'Didn\'t anyone mention',
	},
	2:{
		
		1: "the average person spends six months of their lifetime waiting for red lights to turn green.",
		2: "honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
		3: "the shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.",
		4: "the Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the metal.",
		5: "the national animal of Scotland is the unicorn.",
		6: "a group of flamingos is called a \"flamboyance\".",
		7: "the world's oldes piece of chewing gum is over 9,000 years old." ,
		8: "the average person walks the equivalent of three times around the world in their lifetime",
		9: "there are over 700 coding languages, and coding bugs were not named after actual bugs.",
		10: "coding is not boring and is not exclusive to intellectual people. It is a fascinating and mind-blowing field that requires logical thinking and problem-solving skills.",

	}, 
}

const createRandomMessage = () => Math.floor(Math.random() * 11) + 1

console.log(facts[1][createRandomMessage()],facts[2][createRandomMessage()])

