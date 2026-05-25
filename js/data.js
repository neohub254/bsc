// ========================================
// CIVIL-X ENGINEERING OS - CENTRAL DATA HUB
// ========================================

const CIVIL_DATA = {
    // Class Information
    classInfo: {
        className: "BSC Civil Engineering",
        totalStudents: 90,
        year: "2024/2025",
        semester: "Second Semester",
        university: "Dedan Kimathi University of Technology",
        examStartDate: "2025-01-15",
    },

    // Subjects Database
    subjects: [
        {
            id: 1,
            name: "Hydraulics II",
            code: "ECH 2202",
            lecturer: "Dr. Mwangi",
            venue: "Engineering Lab 3",
            lectureHours: "Mon 8-11 AM, Wed 2-5 PM",
            difficulty: 85,
            funnyStatus: "Currently fighting for my life",
            meme: "Hydraulics got me questioning my life choices fr fr 💀",
            notes: [
                {
                    title: "Hydraulics CAT 1 Notes",
                    file: "notes/hydraulics-cat1.pdf",
                    type: "pdf",
                    size: "2.4 MB"
                },
                {
                    title: "Hydraulics Assignment Solutions",
                    file: "notes/hydraulics-assignment.pdf",
                    type: "pdf",
                    size: "1.8 MB"
                },
                {
                    title: "Pipe Flow Calculations",
                    file: "notes/pipe-flow.pdf",
                    type: "pdf",
                    size: "3.1 MB"
                }
            ],
            pastPapers: [
                {
                    title: "Hydraulics CAT 1 2023",
                    file: "pastpapers/hydraulics-cat1-2023.pdf",
                    type: "pdf"
                },
                {
                    title: "Hydraulics Exam 2022",
                    file: "pastpapers/hydraulics-exam-2022.pdf",
                    type: "pdf"
                }
            ],
            youtubeVideos: [
                {
                    title: "Hydraulics Basics Tutorial",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    thumbnail: "assets/images/hydraulics-thumb.jpg"
                },
                {
                    title: "Pipe Flow Explained",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    thumbnail: "assets/images/pipe-thumb.jpg"
                }
            ]
        },
        {
            id: 2,
            name: "Transportation Engineering",
            code: "ECH 2204",
            lecturer: "Prof. Kimani",
            venue: "Lecture Hall 5",
            lectureHours: "Tue 8-11 AM, Thu 2-5 PM",
            difficulty: 75,
            funnyStatus: "Traffic jammed in my brain",
            meme: "Transportation students after seeing the CAT average: 💀💀💀",
            notes: [
                {
                    title: "Transportation Planning Notes",
                    file: "notes/transport-planning.pdf",
                    type: "pdf",
                    size: "3.2 MB"
                },
                {
                    title: "Traffic Engineering Summary",
                    file: "notes/traffic-eng.pdf",
                    type: "pdf",
                    size: "2.1 MB"
                }
            ],
            pastPapers: [
                {
                    title: "Transportation CAT 1",
                    file: "pastpapers/transport-cat1.pdf",
                    type: "pdf"
                }
            ],
            youtubeVideos: [
                {
                    title: "Transportation Engineering Intro",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    thumbnail: "assets/images/transport-thumb.jpg"
                }
            ]
        },
        {
            id: 3,
            name: "Soil Mechanics",
            code: "ECH 2206",
            lecturer: "Dr. Wanjiku",
            venue: "Soil Lab",
            lectureHours: "Wed 8-11 AM, Fri 8-11 AM",
            difficulty: 80,
            funnyStatus: "Digging graves since semester started",
            meme: "Soil Mechanics digging graves since semester started ⚰️",
            notes: [
                {
                    title: "Soil Classification Guide",
                    file: "notes/soil-classification.pdf",
                    type: "pdf",
                    size: "2.8 MB"
                },
                {
                    title: "Soil Testing Procedures",
                    file: "notes/soil-testing.pdf",
                    type: "pdf",
                    size: "3.5 MB"
                }
            ],
            pastPapers: [
                {
                    title: "Soil Mechanics Exam 2023",
                    file: "pastpapers/soil-exam-2023.pdf",
                    type: "pdf"
                }
            ],
            youtubeVideos: [
                {
                    title: "Soil Mechanics Fundamentals",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    thumbnail: "assets/images/soil-thumb.jpg"
                }
            ]
        },
        {
            id: 4,
            name: "Structural Analysis",
            code: "ECH 2208",
            lecturer: "Eng. Otieno",
            venue: "Design Studio",
            lectureHours: "Mon 2-5 PM, Thu 8-11 AM",
            difficulty: 90,
            funnyStatus: "Structures ain't structurin'",
            meme: "When the structure you analyzed actually works: IMPOSSIBLE 🔥",
            notes: [
                {
                    title: "Structural Analysis Notes",
                    file: "notes/structural-analysis.pdf",
                    type: "pdf",
                    size: "4.1 MB"
                }
            ],
            pastPapers: [
                {
                    title: "Structural Analysis CAT 2",
                    file: "pastpapers/structural-cat2.pdf",
                    type: "pdf"
                }
            ],
            youtubeVideos: [
                {
                    title: "Structural Analysis Tutorial",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    thumbnail: "assets/images/structural-thumb.jpg"
                }
            ]
        },
        {
            id: 5,
            name: "Calculus IV",
            code: "SMA 2272",
            lecturer: "Dr. Njeri",
            venue: "Math Lab",
            lectureHours: "Tue 2-5 PM, Fri 2-5 PM",
            difficulty: 88,
            funnyStatus: "Probability of passing: calculating...",
            meme: "Surviving Calculus IV should be on my CV at this point 📊",
            notes: [
                {
                    title: "Calculus IV Complete Notes",
                    file: "notes/calculus-notes.pdf",
                    type: "pdf",
                    size: "5.2 MB"
                }
            ],
            pastPapers: [
                {
                    title: "Calculus IV Exam 2023",
                    file: "pastpapers/calculus-exam-2023.pdf",
                    type: "pdf"
                }
            ],
            youtubeVideos: [
                {
                    title: "Calculus IV Crash Course",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    thumbnail: "assets/images/calculus-thumb.jpg"
                }
            ]
        },
        {
            id: 6,
            name: "Engineering Survey II",
            code: "ECH 2210",
            lecturer: "Mr. Kamau",
            venue: "Field Practice",
            lectureHours: "Wed 2-5 PM",
            difficulty: 65,
            funnyStatus: "Lost in the field somewhere",
            meme: "Survey students explaining why their measurements are 2mm off: 🗣️🗣️🗣️",
            notes: [
                {
                    title: "Survey Field Notes",
                    file: "notes/survey-notes.pdf",
                    type: "pdf",
                    size: "2.3 MB"
                }
            ],
            pastPapers: [
                {
                    title: "Survey Practical Exam",
                    file: "pastpapers/survey-practical.pdf",
                    type: "pdf"
                }
            ],
            youtubeVideos: [
                {
                    title: "Survey Equipment Tutorial",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    thumbnail: "assets/images/survey-thumb.jpg"
                }
            ]
        },
        {
            id: 7,
            name: "Construction Materials",
            code: "ECH 2212",
            lecturer: "Dr. Chepkoech",
            venue: "Materials Lab",
            lectureHours: "Thu 2-5 PM",
            difficulty: 60,
            funnyStatus: "Testing concrete till it breaks (like my spirit)",
            meme: "When the concrete mix is perfect but your GPA isn't: 😭",
            notes: [
                {
                    title: "Materials Testing Guide",
                    file: "notes/materials-testing.pdf",
                    type: "pdf",
                    size: "2.7 MB"
                }
            ],
            pastPapers: [
                {
                    title: "Materials CAT 1",
                    file: "pastpapers/materials-cat1.pdf",
                    type: "pdf"
                }
            ],
            youtubeVideos: [
                {
                    title: "Concrete Mix Design",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    thumbnail: "assets/images/materials-thumb.jpg"
                }
            ]
        },
        {
            id: 8,
            name: "Geotechnical Engineering",
            code: "ECH 2214",
            lecturer: "Prof. Mutua",
            venue: "Lecture Hall 2",
            lectureHours: "Fri 8-11 AM",
            difficulty: 82,
            funnyStatus: "Geotech got me geostressed",
            meme: "Geotech calculations be like: let me introduce you to 47 assumptions 📐",
            notes: [
                {
                    title: "Geotechnical Design Notes",
                    file: "notes/geotech-notes.pdf",
                    type: "pdf",
                    size: "3.9 MB"
                }
            ],
            pastPapers: [
                {
                    title: "Geotech Final Exam",
                    file: "pastpapers/geotech-exam.pdf",
                    type: "pdf"
                }
            ],
            youtubeVideos: [
                {
                    title: "Geotechnical Engineering Basics",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    thumbnail: "assets/images/geotech-thumb.jpg"
                }
            ]
        }
    ],

    // Announcements
    announcements: [
        {
            id: 1,
            title: "🚨 CAT 1 DATES ANNOUNCED",
            message: "Hydraulics and Transportation CATs scheduled for next week. May the odds be ever in your favor.",
            date: "2024-12-20",
            priority: "high"
        },
        {
            id: 2,
            title: "📚 NOTES UPLOADED",
            message: "New study materials uploaded for Structural Analysis. Grab them before they disappear like your motivation.",
            date: "2024-12-18",
            priority: "medium"
        },
        {
            id: 3,
            title: "⚠️ VENUE CHANGE",
            message: "Soil Mechanics lab moved to Engineering Lab 3. Don't show up at the wrong place like last time 💀",
            date: "2024-12-15",
            priority: "medium"
        },
        {
            id: 4,
            title: "🎉 WEEKEND MOTIVATION",
            message: "Remember: Sleep is temporary, GPA is forever. Now go study those notes!",
            date: "2024-12-22",
            priority: "low"
        }
    ],

    // Engineering Memes
    memes: [
        {
            image: "assets/memes/meme1.jpg",
            caption: "When someone asks if civil engineering is easy",
            fallback: "https://via.placeholder.com/500x400/0a0a1a/00ffff?text=ENGINEERING+MEME+1"
        },
        {
            image: "assets/memes/meme2.jpg",
            caption: "Me explaining why the structure collapsed (it was definitely not my calculations)",
            fallback: "https://via.placeholder.com/500x400/0a0a1a/00ffff?text=ENGINEERING+MEME+2"
        },
        {
            image: "assets/memes/meme3.jpg",
            caption: "Hydraulics students pretending they understand Bernoulli's principle",
            fallback: "https://via.placeholder.com/500x400/0a0a1a/00ffff?text=ENGINEERING+MEME+3"
        },
        {
            image: "assets/memes/meme4.jpg",
            caption: "That moment when your concrete cube test fails",
            fallback: "https://via.placeholder.com/500x400/0a0a1a/00ffff?text=ENGINEERING+MEME+4"
        },
        {
            image: "assets/memes/meme5.jpg",
            caption: "Survey students measuring 100m for the 47th time",
            fallback: "https://via.placeholder.com/500x400/0a0a1a/00ffff?text=ENGINEERING+MEME+5"
        }
    ],

    // Engineering Quotes
    quotes: [
        {
            text: "An engineer is someone who can do for one dollar what any fool can do for two.",
            author: "- Unknown Genius"
        },
        {
            text: "To the optimist, the glass is half full. To the pessimist, the glass is half empty. To the engineer, the glass is twice as big as it needs to be.",
            author: "- Engineering Wisdom"
        },
        {
            text: "Civil engineers make the world's infrastructure. Other engineers make things that fit inside it.",
            author: "- Based Civil Engineer"
        },
        {
            text: "I'm a civil engineer. I solve problems you don't know you have in ways you can't understand.",
            author: "- Every CE Student"
        },
        {
            text: "The road to success is always under construction.",
            author: "- Lily Tomlin"
        },
        {
            text: "Structural engineering is the art of molding materials we don't wholly understand into shapes we can't fully analyze.",
            author: "- Dr. E.H. Brown"
        }
    ],

    // Engineering Jokes
    jokes: [
        "Why did the civil engineer break up with their partner? They said they needed more space... and better structural support 😅",
        "What's a civil engineer's favorite type of music? Heavy metal... structures 🏗️",
        "Why do civil engineers make great friends? They're always willing to lend support! 🏛️",
        "What did the soil say to the geotechnical engineer? Stop taking me for granite! 🪨",
        "Why was the calculus book sad? It had too many problems to solve 📊",
        "Surviving Calculus IV should be on my CV at this point fr fr",
        "Hydraulics got me fighting for my life every single lecture 💀",
        "Transportation students after seeing the CAT average: we going nowhere fast 🚗",
        "Soil Mechanics: because who doesn't love playing with dirt for 4 years? 🌱",
        "When the lecturer says 'this is basic' and proceeds to write hieroglyphics ✍️"
    ],

    // Semester Survival Tips
    survivalTips: [
        "Tip #1: Coffee is not a meal, but we don't judge here ☕",
        "Tip #2: Sleep is for the weak. Just kidding, please sleep or you'll hallucinate blueprints 👻",
        "Tip #3: Make friends with the smart kid. They're your lifeline 📚",
        "Tip #4: YouTube tutorials > Lecture notes (don't tell the lecturers) 🎥",
        "Tip #5: Always carry a calculator. Always. 🔢",
        "Tip #6: The library is your new home. Accept it. 🏠",
        "Tip #7: Past papers are treasure. Guard them with your life 💎",
        "Tip #8: When in doubt, the answer is probably concrete 🏗️"
    ],

    // Lecturer Ratings (funny)
    lecturerRatings: [
        {
            name: "Dr. Mwangi (Hydraulics)",
            rating: "⭐⭐⭐⭐",
            comment: "Explains well but CATs are from another dimension 💀"
        },
        {
            name: "Prof. Kimani (Transportation)",
            rating: "⭐⭐⭐⭐⭐",
            comment: "GOAT. Actually wants us to pass 🙏"
        },
        {
            name: "Dr. Wanjiku (Soil Mechanics)",
            rating: "⭐⭐⭐",
            comment: "Nice person, but why so many soil classifications tho? 🌱"
        },
        {
            name: "Eng. Otieno (Structural)",
            rating: "⭐⭐⭐⭐",
            comment: "Tough but fair. His jokes are questionable though 😅"
        }
    ],

    // Confessions
    confessions: [
        "I once submitted an assignment I didn't do and the lecturer said it was 'excellent work' 💀",
        "I've been using the same calculator since Form 1. It's seen things. 🔢",
        "Sometimes I just nod in class hoping the lecturer doesn't ask questions 🤡",
        "I told my parents I'm top of the class. Plot twist: there's only one student in my study group 😭",
        "My structural analysis assignment collapsed just like my social life 🏚️",
        "I write 'refer to figure 3.2' in exams even when there's no figure 3.2 📖",
        "50% of my engineering knowledge is from YouTube. The other 50% is from my classmates' WhatsApp group 🎓"
    ],

    // Gallery Images
    gallery: [
        { src: "assets/images/gallery1.jpg", caption: "Field Survey Practice" },
        { src: "assets/images/gallery2.jpg", caption: "Concrete Lab Session" },
        { src: "assets/images/gallery3.jpg", caption: "Class of 2024" },
        { src: "assets/images/gallery4.jpg", caption: "Site Visit Day" }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CIVIL_DATA;
}
