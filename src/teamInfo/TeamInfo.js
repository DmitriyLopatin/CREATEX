import Bell from './teamInfo_imges/Bell.svg'
import Fisher from './teamInfo_imges/Fisher.svg'
import Hawkins from './teamInfo_imges/Hawkins.svg'
import Li from './teamInfo_imges/Li.svg'
import McKinney from './teamInfo_imges/McKinney.svg'
import Murphy from './teamInfo_imges/Murphy.svg'
import Russell from './teamInfo_imges/Russel.svg'
import Simmons from './teamInfo_imges/Simmons.svg'
import Watson from './teamInfo_imges/Watson.svg'
import classessV from './TeamCardVertical.module.css'
import classessH from './TeamCardHorizontal.module.css'
import { Link } from 'react-router-dom'
import { Button14 } from '../UI/button/Button'
import evenHorizontal from './EventCardHorizontal.module.css'
import eventCardVertical from './EventCardVertical.module.css'


export let teamMemberData = [
    {
        photo: Bell,
        name: 'Jeremy Bell',
        position: 'Senior UX marketing IT Product Company',
        raiting: 4.6,
        numberOfCourses: 2,
        numberOfStudents: 120,
        description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
        facebook: 'https://www.facebook.com/profile.php?id=100011012733715'
    },
    {
        photo: McKinney,
        name: 'Marvin McKinney',
        position: 'Master UX Management IT Product Company',
        raiting: 4.9,
        numberOfCourses: 4,
        numberOfStudents: 320,
        description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
        facebook: 'https://www.facebook.com/marvin.mckiney'
    },
    {
        photo: Li,
        name: 'Leslie Alexander Li',
        position: 'Master UX Management IT Product Company',
        raiting: 4.1,
        numberOfCourses: 1,
        numberOfStudents: 60,
        description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
        facebook: 'https://www.facebook.com/marvin.mckiney'
    },
    {
        photo: Watson,
        name: 'Kristin Watson',
        position: 'Master UX Management IT Product Company',
        raiting: 4.5,
        numberOfCourses: 2,
        numberOfStudents: 130,
        description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
        facebook: 'https://www.facebook.com/marvin.mckiney'
    },
    {
        photo: Hawkins,
        name: 'Guy Hawkins',
        position: 'Master UX Management IT Product Company',
        raiting: 4.4,
        numberOfCourses: 2,
        numberOfStudents: 220,
        description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
        facebook: 'https://www.facebook.com/marvin.mckiney'
    },
    {
        photo: Russell,
        name: 'Dianne Russell',
        position: 'Master UX Management IT Product Company',
        raiting: 4.1,
        numberOfCourses: 4,
        numberOfStudents: 320,
        description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
        facebook: 'https://www.facebook.com/marvin.mckiney'
    },
    {
        photo: Simmons,
        name: 'Brooklyn Simmons',
        position: 'Master UX Management IT Product Company',
        raiting: 4.6,
        numberOfCourses: 4,
        numberOfStudents: 320,
        description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
        facebook: 'https://www.facebook.com/marvin.mckiney'
    },
    {
        photo: Murphy,
        name: 'Kathryn Murphy',
        position: 'Bachelo UX Management IT Product Company',
        raiting: 5.0,
        numberOfCourses: 4,
        numberOfStudents: 156,
        description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
        facebook: 'https://www.facebook.com/marvin.mckiney'
    },
    {
        photo: Fisher,
        name: 'Cody Fisher',
        position: 'Master UX Management IT Product Company',
        raiting: 4.2,
        numberOfCourses: 3,
        numberOfStudents: 120,
        description: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
        facebook: 'https://www.facebook.com/marvin.mckiney'
    }
]

export let courseData = [
    {
        courseAuthorInfa: teamMemberData[0],
        courseArea: 'Marketing',
        courseColor: '#03CEA4',
        courseName: 'The Ultimate Google Ads Training Course',
        coursePrice: '$100',
        courseAuthor: 'by Jerome Bell',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[1],
        courseArea: 'Management',
        courseColor: '#5A87FC',
        courseName: 'Product Management Fundamentals',
        coursePrice: '$480',
        courseAuthor: 'by Marvin McKinney',
        courseDate: 'Dec 2 - Dec 31',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[2],
        courseArea: 'HR & Recruting',
        courseColor: '#F89828',
        courseName: 'HR\u00a0 Management and Analytics',
        coursePrice: '$200',
        courseAuthor: 'by Leslie Alexander Li',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[3],
        courseArea: 'Marketing',
        courseColor: '#03CEA4',
        courseName: 'Brand Management & PR Communications',
        coursePrice: '$530',
        courseAuthor: 'by Kristin Watson',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[4],
        courseArea: 'Design',
        courseColor: '#F52F6E',
        courseName: 'Graphic Design Basic',
        coursePrice: '$500',
        courseAuthor: 'by Guy Hawkins',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[5],
        courseArea: 'Management',
        courseColor: '#5A87FC',
        courseName: 'Business Development Management',
        coursePrice: '$400',
        courseAuthor: 'by Dianne Russell',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[6],
        courseArea: 'Development',
        courseColor: '#7772F1',
        courseName: 'Highload Software Architecture',
        coursePrice: '$600',
        courseAuthor: 'by Brooklyn Simmons',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[7],
        courseArea: 'HR & Recruting',
        courseColor: '#F89828',
        courseName: 'Human Resources – Selection and Recruitment',
        coursePrice: '$150',
        courseAuthor: 'by Kathryn Murphy',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[8],
        courseArea: 'Design',
        courseColor: '#F52F6E',
        courseName: 'User Experience. Human-centered Design',
        coursePrice: '$240',
        courseAuthor: 'by Cody Fisher',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[0],
        courseArea: 'Marketing',
        courseColor: '#03CEA4',
        courseName: 'The Ultimate Google Ads Training Course',
        coursePrice: '$100',
        courseAuthor: 'by Jerome Bell',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[1],
        courseArea: 'Management',
        courseColor: '#5A87FC',
        courseName: 'Product Management Fundamentals',
        coursePrice: '$480',
        courseAuthor: 'by Marvin McKinney',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[2],
        courseArea: 'HR & Recruting',
        courseColor: '#F89828',
        courseName: 'HR\u00a0 Management and Analytics',
        coursePrice: '$200',
        courseAuthor: 'by Leslie Alexander Li',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[3],
        courseArea: 'Marketing',
        courseColor: '#03CEA4',
        courseName: 'Brand Management & PR Communications',
        coursePrice: '$530',
        courseAuthor: 'by Kristin Watson',
        courseDate: 'Aug 1 - Sep 31',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[6],
        courseArea: 'Development',
        courseColor: '#7772F1',
        courseName: 'Highload Software Architecture',
        coursePrice: '$600',
        courseAuthor: 'by Brooklyn Simmons',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[7],
        courseArea: 'HR & Recruting',
        courseColor: '#F89828',
        courseName: 'Human Resources – Selection and Recruitment',
        coursePrice: '$150',
        courseAuthor: 'by Kathryn Murphy',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[2],
        courseArea: 'HR & Recruting',
        courseColor: '#F89828',
        courseName: 'HR\u00a0 Management and Analytics',
        coursePrice: '$200',
        courseAuthor: 'by Leslie Alexander Li',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },
    {
        courseAuthorInfa: teamMemberData[6],
        courseArea: 'Development',
        courseColor: '#7772F1',
        courseName: 'Highload Software Architecture',
        coursePrice: '$600',
        courseAuthor: 'by Brooklyn Simmons',
        courseDate: 'Sep 7 - Nov 2',
        courseDuration: '2 months - 8 lessons',
        courseAbout: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
        coursePoints: [
            'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            'Vulputate placerat amet pulvinar lorem nisl.',
            'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
            'Etiam duis lobortis in fames ultrices commodo nibh.',
            'Fringilla in nec risus congue venenatis pretium posuere nec.',
            'Cursus eu pretium, vulputate tempus quam massa sed at.'
        ],
        courseLessons: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.'
            ],
            [
                'Est, ut tempus id rutrum facilisi.'
            ],
            [
                'Amet nec in pellentesque.'
            ],
            [
                'Massa vel arcu mauris, id vel rhoncus mattis quis.'
            ],
            [
                'Neque, cursus sapien nullam id.'
            ]
        ]
    },

]

export let eventData = [
    {
        day: '05',
        month: 'August',
        time: '11:00 - 14:00',
        topic: 'Formation of the organizational structure of the company in the face of uncertainty.',
        eventType: 'Online master-class',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[0]
    },
    {
        day: '24',
        month: 'July',
        time: '11:00 - 12:30',
        topic: 'Building a customer service department. Best Practices.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[1]
    },
    {
        day: '16',
        month: 'July',
        time: '9:00 - 14:00',
        topic: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
        eventType: 'Online workshop',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[2]
    },
    {
        day: '10',
        month: 'July',
        time: '9:00 - 14:00',
        topic: 'Find and evaluate: search and assessment tools for candidates.',
        eventType: 'Online workshop',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[3]
    },
    {
        day: '27',
        month: 'June',
        time: '15:00 - 19:00',
        topic: 'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.',
        eventType: 'Online master-class',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[4]
    },
    {
        day: '15',
        month: 'June',
        time: '10:00 - 12:00',
        topic: 'Marketing or growth hacking: main differences and what business needs.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[5]
    },
    {
        day: '02',
        month: 'June',
        time: '11:00 - 13:00',
        topic: 'How to brief a client and present your design to approve it from the first show.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[6]
    },
    {
        day: '29',
        month: 'May',
        time: '11:00 - 12:00',
        topic: 'Who is a project manager and do I want to be PM?',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[6]
    },
    {
        day: '18',
        month: 'May',
        time: '10:00 - 12:00',
        topic: 'The company\'s business page as an additional tool to support the announcement of vacancies.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[8]
    },
    {
        day: '10',
        month: 'May',
        time: '11:00 - 14:00',
        topic: 'Formation of the organizational structure of the company in the face of uncertainty.',
        eventType: 'Online master-class',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[0]
    },
    {
        day: '06',
        month: 'May',
        time: '10:00 - 13:30',
        topic: 'Building a customer service department. Best Practices.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[1]
    },
    {
        day: '01',
        month: 'May',
        time: '11:40 - 14:00',
        topic: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
        eventType: 'Online workshop',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[2]
    },
    {
        day: '29',
        month: 'April',
        time: '19:00 - 21:00',
        topic: 'Find and evaluate: search and assessment tools for candidates.',
        eventType: 'Online workshop',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[3]
    },
    {
        day: '25',
        month: 'April',
        time: '15:00 - 19:00',
        topic: 'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.',
        eventType: 'Online master-class',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[4]
    },
    {
        day: '15',
        month: 'April',
        time: '10:00 - 12:30',
        topic: 'Marketing or growth hacking: main differences and what business needs.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[5]
    },
    {
        day: '12',
        month: 'April',
        time: '11:00 - 13:00',
        topic: 'How to brief a client and present your design to approve it from the first show.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[6]
    },
    {
        day: '07',
        month: 'April',
        time: '11:00 - 12:00',
        topic: 'Who is a project manager and do I want to be PM?',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[6]
    },
    {
        day: '04',
        month: 'April',
        time: '11:00 - 12:50',
        topic: 'The company\'s business page as an additional tool to support the announcement of vacancies.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[8]
    },
    {
        day: '01',
        month: 'April',
        time: '11:00 - 14:00',
        topic: 'Formation of the organizational structure of the company in the face of uncertainty.',
        eventType: 'Online master-class',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[0]
    },
    {
        day: '28',
        month: 'March',
        time: '10:00 - 12:30',
        topic: 'Building a customer service department. Best Practices.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[1]
    },
    {
        day: '24',
        month: 'March',
        time: '9:00 - 14:00',
        topic: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
        eventType: 'Online workshop',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[2]
    },
    {
        day: '19',
        month: 'March',
        time: '9:00 - 14:00',
        topic: 'Find and evaluate: search and assessment tools for candidates.',
        eventType: 'Online workshop',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[3]
    },
    {
        day: '01',
        month: 'March',
        time: '15:00 - 19:00',
        topic: 'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.',
        eventType: 'Online master-class',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[4]
    },
    {
        day: '23',
        month: 'February',
        time: '10:00 - 12:00',
        topic: 'Marketing or growth hacking: main differences and what business needs.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[5]
    },
    {
        day: '02',
        month: 'February',
        time: '10:00 - 14:00',
        topic: 'How to brief a client and present your design to approve it from the first show.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[6]
    },
    {
        day: '20',
        month: 'January',
        time: '11:00 - 12:00',
        topic: 'Who is a project manager and do I want to be PM?',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[6]
    },
    {
        day: '03',
        month: 'January',
        time: '16:00 - 18:30',
        topic: 'The company\'s business page as an additional tool to support the announcement of vacancies.',
        eventType: 'Online lecture',
        topicPoints: [
            [
                'Aliquet lectus urna viverra in odio.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Orci commodo, viverra orci mollis ut euismod.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'Sagittis vitae facilisi rutrum amet mauris quisque vel.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ],
            [
                'In id dolor quis nunc, urna hendrerit pharetra.', 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
            ]
        ],
        eventSpeaker: teamMemberData[8]
    },
]

export const TeamCardVertical = (props) => {
    let style = {
        backgroundColor: props.arr[props.num].courseColor
    }
    return (
        <Link to={{
            pathname: `/courses/${props.arr[props.num].courseName}`,
        }} state={props.arr[props.num]}>
            <div className={classessV.main}>
                <img className={classessV.photo} src={props.arr[props.num].courseAuthorInfa.photo} />
                <div className={classessV.mainBlock}>
                    <span className={classessV.area} style={style}> {props.arr[props.num].courseArea} </span>
                    <p className={classessV.name}>{props.arr[props.num].courseName}</p>
                    <p className={classessV.footer}><span className={classessV.cost}>{props.arr[props.num].coursePrice}</span>| {props.arr[props.num].courseAuthor}</p>
                </div>
            </div>
        </Link>
    )
}

export const TeamCardHorizontal = (props) => {
    let style = {
        backgroundColor: courseData[props.num].courseColor
    }
    // console.log(props)
    return (
        <Link to={{
            pathname: `/courses/${courseData[props.num].courseName}`,
        }} state={courseData[props.num]}>
            <div className={classessH.main} style={{ transform: `translateX(${props.courseShift}px)` }}>
                <div className={classessH.photo}>
                    <img className={classessH.photoCut} src={courseData[props.num].courseAuthorInfa.photo} />
                </div>
                <div className={classessH.content}>
                    <span className={classessH.position} style={style}> {courseData[props.num].courseArea} </span>
                    <p className={classessH.courseName}>{courseData[props.num].courseName}</p>
                    <p className={classessH.footer}><span className={classessH.cost}>{courseData[props.num].coursePrice}</span>| {courseData[props.num].courseAuthor}</p>
                </div>
            </div>
        </Link>
    )
}

export const EventCardVertical = (props) => {
    return (
            <div className={eventCardVertical.main}>
                <p className={eventCardVertical.date}>{props.data[props.num].day} {props.data[props.num].month}</p>
                <p className={eventCardVertical.time}>{props.data[props.num].time}</p>
                <p className={eventCardVertical.name}>{props.data[props.num].topic}</p>
                <p className={eventCardVertical.type}>{props.data[props.num].eventType}</p>
                <Button14 width={342} link={`/events/${props.data[props.num].topic}`} state={props.data[props.num]}>View more</Button14>
            </div>
    )
}
export const EventCardHorizontal = (props) => {
    return (
            <div className={evenHorizontal.main}>
                <div className={evenHorizontal.date}>
                    <p className={evenHorizontal.day}>{props.data[props.num].day}</p>
                    <div className='eventInfo_M-T'>
                        <p className={evenHorizontal.month}>{props.data[props.num].month}</p>
                        <p className={evenHorizontal.time}>{props.data[props.num].time}</p>
                    </div>
                </div>
                <div className={evenHorizontal.header}>
                    <p className={evenHorizontal.name}>{props.data[props.num].topic}</p>
                    <p className={evenHorizontal.type}>{props.data[props.num].eventType}</p>
                </div>
                <Button14 width={136} link={`/events/${props.data[props.num].topic}`} state={props.data[props.num]}>View more</Button14>
            </div>
    )
}
