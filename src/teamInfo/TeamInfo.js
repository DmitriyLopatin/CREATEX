import Bell from './teamInfo_imges/Bell.svg'
import Fisher from './teamInfo_imges/Fisher.svg'
import Hawkins from './teamInfo_imges/Hawkins.svg'
import Li from './teamInfo_imges/Li.svg'
import McKinney from './teamInfo_imges/McKinney.svg'
import Murphy from './teamInfo_imges/Murphy.svg'
import Russell from './teamInfo_imges/Russel.svg'
import Simmons from './teamInfo_imges/Simmons.svg'
import Watson from './teamInfo_imges/Watson.svg'
import BlogImage1 from './blogImages/blog_scrn0.svg'
import BlogImage2 from './blogImages/blog_scrn1.svg'
import BlogImage3 from './blogImages/blog_scrn2.svg'
import BlogImage4 from './blogImages/blog_scrn3.svg'
import BlogImage5 from './blogImages/blog_scrn4.svg'
import BlogImage6 from './blogImages/blog_scrn5.svg'
import BlogImage7 from './blogImages/blog_scrn6.svg'
import BlogImage8 from './blogImages/blog_scrn7.svg'
import classessV from './TeamCardVertical.module.css'
import classessH from './TeamCardHorizontal.module.css'
import { Link } from 'react-router-dom'
import { Button14 } from '../UI/button/Button'
import evenHorizontal from './EventCardHorizontal.module.css'
import eventCardVertical from './EventCardVertical.module.css'
import blogCardVertical from './BlogCardVertical.module.css'
import { useEffect } from 'react'


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

export let blogData = [
    {
        blogType: ['Podcast', '\ub904'],
        blogTheme: 'Marketing',
        blogBackground: BlogImage1,
        blogDate: 'September 4, 2020',
        blogLasting: '36 min',
        blogHeading: 'What is traffic arbitrage and does it really make money?',
        blogDescription: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
        blogAct: 'Listen',
        blogAuthor: teamMemberData[0],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'Development',
        blogDate: 'September 1, 2020',
        blogBackground: BlogImage2,
        blogLasting: '',
        blogHeading: 'How to choose the first programming language for a beginner',
        blogDescription: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[1],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Design',
        blogDate: 'August 8, 2020',
        blogBackground: BlogImage3,
        blogLasting: '40 min',
        blogHeading: 'Should you choose a creative profession if you are attracted to creativity?',
        blogDescription: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[2],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'HR & Recruiting',
        blogDate: 'August 3, 2020',
        blogBackground: BlogImage4,
        blogLasting: '40 min',
        blogHeading: 'Should you choose a creative profession if you are attracted to creativity?',
        blogDescription: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[3],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Management',
        blogDate: 'August 2, 2020',
        blogBackground: BlogImage5,
        blogLasting: '45 min',
        blogHeading: 'What to do and who to talk to if you want to get feedback on the product',
        blogDescription: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[4],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Podcast', '\ub904'],
        blogTheme: 'Design',
        blogDate: 'July 28, 2020',
        blogBackground: BlogImage6,
        blogLasting: '36 min',
        blogHeading: 'What are color profiles and how they work in graphic design',
        blogDescription: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
        blogAct: 'Listen',
        blogAuthor: teamMemberData[5],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Management',
        blogDate: 'July 15, 2020',
        blogBackground: BlogImage7,
        blogLasting: '45 min',
        blogHeading: 'Startup: how to build a team that will live longer than a year',
        blogDescription: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[6],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'HR & Recruiting',
        blogDate: 'July 9, 2020',
        blogBackground: BlogImage8,
        blogLasting: '',
        blogHeading: 'How to get customers to love your business from the start',
        blogDescription: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[7],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Podcast', '\ub904'],
        blogTheme: 'Marketing',
        blogBackground: BlogImage3,
        blogDate: 'July 4, 2020',
        blogLasting: '45 min',
        blogHeading: 'What is traffic arbitrage and does it really make money?',
        blogDescription: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
        blogAct: 'Listen',
        blogAuthor: teamMemberData[0],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'Development',
        blogDate: 'June 29, 2020',
        blogBackground: BlogImage2,
        blogLasting: '',
        blogHeading: 'How to choose the first programming language for a beginner',
        blogDescription: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[1],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Design',
        blogDate: 'June 20, 2020',
        blogBackground: BlogImage3,
        blogLasting: '40 min',
        blogHeading: 'Should you choose a creative profession if you are attracted to creativity?',
        blogDescription: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[2],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'HR & Recruiting',
        blogDate: 'June 13, 2020',
        blogBackground: BlogImage4,
        blogLasting: '40 min',
        blogHeading: 'Should you choose a creative profession if you are attracted to creativity?',
        blogDescription: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[3],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Management',
        blogDate: 'June 2, 2020',
        blogBackground: BlogImage5,
        blogLasting: '45 min',
        blogHeading: 'What to do and who to talk to if you want to get feedback on the product',
        blogDescription: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[4],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Podcast', '\ub904'],
        blogTheme: 'Design',
        blogDate: 'June 1, 2020',
        blogBackground: BlogImage6,
        blogLasting: '36 min',
        blogHeading: 'What are color profiles and how they work in graphic design',
        blogDescription: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
        blogAct: 'Listen',
        blogAuthor: teamMemberData[5],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Management',
        blogDate: 'May 25, 2020',
        blogBackground: BlogImage7,
        blogLasting: '45 min',
        blogHeading: 'Startup: how to build a team that will live longer than a year',
        blogDescription: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[6],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'Marketing',
        blogDate: 'May 9, 2020',
        blogBackground: BlogImage8,
        blogLasting: '',
        blogHeading: 'How to get customers to love your business from the start',
        blogDescription: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[7],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Podcast', '\ub904'],
        blogTheme: 'Marketing',
        blogBackground: BlogImage3,
        blogDate: 'May 4, 2020',
        blogLasting: '48 min',
        blogHeading: 'What is traffic arbitrage and does it really make money?',
        blogDescription: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
        blogAct: 'Listen',
        blogAuthor: teamMemberData[0],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'Development',
        blogDate: 'May 1, 2020',
        blogBackground: BlogImage2,
        blogLasting: '',
        blogHeading: 'How to choose the first programming language for a beginner',
        blogDescription: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[1],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Design',
        blogDate: 'April 28, 2020',
        blogBackground: BlogImage3,
        blogLasting: '40 min',
        blogHeading: 'Should you choose a creative profession if you are attracted to creativity?',
        blogDescription: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[2],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'HR & Recruiting',
        blogDate: 'April 23, 2020',
        blogBackground: BlogImage4,
        blogLasting: '39 min',
        blogHeading: 'Should you choose a creative profession if you are attracted to creativity?',
        blogDescription: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[3],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Management',
        blogDate: 'April 22, 2020',
        blogBackground: BlogImage5,
        blogLasting: '45 min',
        blogHeading: 'What to do and who to talk to if you want to get feedback on the product',
        blogDescription: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[4],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Podcast', '\ub904'],
        blogTheme: 'Design',
        blogDate: 'April 18, 2020',
        blogBackground: BlogImage6,
        blogLasting: '36 min',
        blogHeading: 'What are color profiles and how they work in graphic design',
        blogDescription: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
        blogAct: 'Listen',
        blogAuthor: teamMemberData[5],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Management',
        blogDate: 'April 15, 2020',
        blogBackground: BlogImage7,
        blogLasting: '45 min',
        blogHeading: 'Startup: how to build a team that will live longer than a year',
        blogDescription: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[6],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'Marketing',
        blogDate: 'April 9, 2020',
        blogBackground: BlogImage8,
        blogLasting: '',
        blogHeading: 'How to get customers to love your business from the start',
        blogDescription: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[7],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Podcast', '\ub904'],
        blogTheme: 'Marketing',
        blogBackground: BlogImage1,
        blogDate: 'April 4, 2020',
        blogLasting: '45 min',
        blogHeading: 'What is traffic arbitrage and does it really make money?',
        blogDescription: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
        blogAct: 'Listen',
        blogAuthor: teamMemberData[0],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'Development',
        blogDate: 'March 29, 2020',
        blogBackground: BlogImage2,
        blogLasting: '',
        blogHeading: 'How to choose the first programming language for a beginner',
        blogDescription: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[1],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Design',
        blogDate: 'March 20, 2020',
        blogBackground: BlogImage3,
        blogLasting: '40 min',
        blogHeading: 'Should you choose a creative profession if you are attracted to creativity?',
        blogDescription: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[2],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'HR & Recruiting',
        blogDate: 'March 13, 2020',
        blogBackground: BlogImage4,
        blogLasting: '40 min',
        blogHeading: 'Should you choose a creative profession if you are attracted to creativity?',
        blogDescription: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[3],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Management',
        blogDate: 'March 2, 2020',
        blogBackground: BlogImage5,
        blogLasting: '45 min',
        blogHeading: 'What to do and who to talk to if you want to get feedback on the product',
        blogDescription: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[4],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Podcast', '\ub904'],
        blogTheme: 'Design',
        blogDate: 'March 1, 2020',
        blogBackground: BlogImage6,
        blogLasting: '36 min',
        blogHeading: 'What are color profiles and how they work in graphic design',
        blogDescription: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
        blogAct: 'Listen',
        blogAuthor: teamMemberData[5],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Video', '\ub903'],
        blogTheme: 'Management',
        blogDate: 'February 25, 2020',
        blogBackground: BlogImage7,
        blogLasting: '45 min',
        blogHeading: 'Startup: how to build a team that will live longer than a year',
        blogDescription: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
        blogAct: 'Watch',
        blogAuthor: teamMemberData[6],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
    },
    {
        blogType: ['Article', '\ub900'],
        blogTheme: 'Marketing',
        blogDate: 'February 9, 2020',
        blogBackground: BlogImage8,
        blogLasting: '',
        blogHeading: 'How to get customers to love your business from the start',
        blogDescription: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
        blogAct: 'Read',
        blogAuthor: teamMemberData[7],
        blogContent: {
            blogContentMain: 'Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. ',
            blogContentText1: 'At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.',
            blogContentText2: 'Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.',
            blogContentQuote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.',
            blogContentText3: 'Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:',
            blogContentPoints: [
                'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
                'Vulputate placerat amet pulvinar lorem nisl.',
                'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
                'Etiam duis lobortis in fames ultrices commodo nibh.'
            ],
            blogContentText4: 'Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.'

        }
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
        <div className={eventCardVertical.main} style={{ transform: `translateX(${props.eventShift}px)` }}>
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

export const BlogCardVertical = (props) => {
   
    return (
        <div className={blogCardVertical.main}>
            <p className={blogCardVertical.type} data={props.arr[props.num].blogType[1]}>{props.arr[props.num].blogType[0]}</p>
            <img src={props.arr[props.num].blogBackground} alt="" />
            <div className={blogCardVertical.content}>             
                    <div>
                        <span className={blogCardVertical.theme}>{props.arr[props.num].blogTheme}</span>
                        <span className={blogCardVertical.date}>{props.arr[props.num].blogDate}</span>
                        <span className={blogCardVertical.lasting} style={props.arr[props.num].blogLasting == '' ? { display: 'none' } : { display: 'inline' }}>{props.arr[props.num].blogLasting}</span>
                    </div>
                    <p className={blogCardVertical.heading}>{props.arr[props.num].blogHeading}</p>
                    <p className={blogCardVertical.description}>{props.arr[props.num].blogDescription}</p>               
                <Link to={{pathname: `/blogs/${props.arr[props.num].blogHeading}`}} state={props.arr[props.num]}><p className={blogCardVertical.act}>{props.arr[props.num].blogAct}</p></Link>
            </div>
        </div>
    )
}

export const PageNotFound = () => {
    let PNFstyle = {
        maxWidth: '1230px',
        margin: '180px auto 120px auto',
        color: '#1e212c',
        textAlign: 'center',
        letterSpacing: '2px'
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <h1 style={PNFstyle}>404. Page HAS NOT BEEN DESIGNED at this time :(</h1>
}