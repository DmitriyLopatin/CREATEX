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
