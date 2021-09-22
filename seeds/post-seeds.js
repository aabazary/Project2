const { Post } = require('../models');

const samplePosts = [
    {
        id: 1,
        title: 'How the do I counter Vulcan?!',
        content: 'I get wrecked by him every time I play against him in mid. His turret alone just bullies me. Idk what to do',
        user_id: 1,
        game_id: 1,
    },
    {
        id: 2,
        title: 'Whats Your Favorite In Game Title?',
        content: 'I personally love my Forge Breaker one because its only earned by beating a Titan Forge Employee / Hi Rez. I really had an awesome experience getting that title and thats why I will never change it. What is your favorite Title you have and why?',
        user_id: 1,
        game_id: 1
    },
    {
        id: 3,
        title: 'New player needs help on how to proceed?',
        content: 'I have been playing Arena for about 2 weeks and am not sure how to take the first step into Conquest. I am level 17 but its almost all Neith. I have watched some videos on the different positions but the couple games I tried I was no help to my team. Where do I start? Thank you for any info or ideas',
        user_id: 1,
        game_id:1
    },
    {
        id: 4,
        title: 'Does anyone else get in a loop of death sometimes when trying to get your corpse back then want to punch your screen?',
        content: 'Seriously, or is it just my nooby ass? Its even worse when you die so much that you run out of gold for potions or merc res too.. maybe I am just bad bahaha. Just had a champion pack of extra fast enchanted sabre cats guarding my corpse on act 2 hell that shit was so annoying.',
        user_id: 1,
        game_id: 3,
    },
    {
        id: 5,
        title: 'With which class are you going to start the game?',
        content: 'I know that most people want to play sorc, but curious to see if people will be interested in other characters too at the beginning :)',
        user_id: 1,
        game_id: 3
    },
    {
        id: 6,
        title: 'How I beat the game with Veigar. A guide that will change your life.',
        content: '1st item must be tear. You may be tempted to spend the remaining 100 gold on pots, but this is a mistake. The same goes for control wards—both items are a waste of gold and will only serve to delay your victory. You must, of course, stack tear as quickly as possible. For this, take smite to secure blue buff from your jungler. This will free you up to stack both your tear and your passive in lane without limit. Use this whenever blue buff is available. There are two important runes for this build: Manaflow Band and Biscuit Delivery. The biscuits can help keep you in lane, but more than that, each of the three biscuits increases your max mana by 50. Meanwhile, Manaflow Band eventually gives 250 bonus mana, for a combined 400 mana from runes.',
        user_id: 1,
        game_id: 2
    }

];

const postSeeds = () => Post.bulkCreate(samplePosts).then().catch((err) => { console.log(err) });

module.exports = postSeeds;