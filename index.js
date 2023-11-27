const facts = {
	1: "The average person spends six months of their lifetime waiting for red lights to turn green.",
	2: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
	3: "The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.",
	4: "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the metal.",
	5: "The national animal of Scotland is the unicorn.",
	6: "A group of flamingos is called a \"flamboyance\".",
	7: "The world's oldes piece of chewing gum is over 9,000 years old." ,
	8: "The average person walks the equivalent of three times around the world in their lifetime",
}

const selectRandomMessage = () => Math.floor(Math.random() * 9)
// console.log(selectRandomMessage())
console.log(facts[selectRandomMessage()])
