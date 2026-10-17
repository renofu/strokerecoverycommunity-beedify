export type Video = { id:string; title:string; duration:string; category:string; description:string; imageUrl:string }
const thumb=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`
export const videos: Video[] = [
{id:'v1',title:'A Calm Start: 3 Minute Reset',duration:'03:12',category:'Daily Practice',description:'A gentle, guided reset to help you begin with attention.',imageUrl:thumb('photo-1506126613408-eca07ce68773')},
{id:'v2',title:'Finger Tap Sequence',duration:'05:40',category:'Micro-Movements',description:'Explore a slow, repeatable finger sequence from a supported seat.',imageUrl:thumb('photo-1559757175-0eb30cd8c063')},
{id:'v3',title:'Set Up Your Practice Space',duration:'04:18',category:'Home Setup',description:'A few simple ideas for making your practice corner welcoming.',imageUrl:thumb('photo-1497366754035-f200968a6e72')},
{id:'v4',title:'Breathing With a Steady Rhythm',duration:'06:05',category:'Mindset',description:'Pair a comfortable rhythm with a few quiet movements.',imageUrl:thumb('photo-1470252649378-9c29740c9fa8')},
{id:'v5',title:'Seated Reach and Return',duration:'04:52',category:'Movement Practice',description:'Practice a small reach and a steady return at your own pace.',imageUrl:thumb('photo-1571019613454-1cb2f99b2d8b')},
{id:'v6',title:'A Friendly Evening Reset',duration:'03:44',category:'Daily Practice',description:'Close the day with a calm, low-pressure routine.',imageUrl:thumb('photo-1500534623283-312aade485b7')},
{id:'v7',title:'Music as a Practice Cue',duration:'05:21',category:'Mindset',description:'Use a familiar song to create an inviting beginning and end.',imageUrl:thumb('photo-1520523839897-bd0b52f945a0')},
{id:'v8',title:'Small Wins Reflection',duration:'02:55',category:'Community',description:'Make space to notice what felt a little easier today.',imageUrl:thumb('photo-1499209974431-9dddcece7f88')},
{id:'v9',title:'Hands at the Table',duration:'07:08',category:'Micro-Movements',description:'A table-supported exploration for hands and attention.',imageUrl:thumb('photo-1544717305-2782549b5136')},
{id:'v10',title:'Gentle Shoulder Release',duration:'03:36',category:'Micro-Movements',description:'A short reset for softening and noticing.',imageUrl:thumb('photo-1518611012118-696072aa579a')},
{id:'v11',title:'Build Your Weekly Cue',duration:'04:02',category:'Tools',description:'Turn a favorite part of your day into a helpful reminder.',imageUrl:thumb('photo-1456324504439-367cee3b3c32')},
{id:'v12',title:'Practice With a Partner',duration:'05:16',category:'Community',description:'Ideas for making a shared practice feel relaxed and respectful.',imageUrl:thumb('photo-1511632765486-a01980e01a18')},
]
