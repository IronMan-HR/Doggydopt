import React from 'react';

class AdoptableList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            found: [
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "lorenmcauley@aol.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10017"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/1/?bust=1521385781&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/1/?bust=1521385781&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/1/?bust=1521385781&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/1/?bust=1521385781&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/1/?bust=1521385781&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/2/?bust=1521385787&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/2/?bust=1521385787&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/2/?bust=1521385787&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/2/?bust=1521385787&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/2/?bust=1521385787&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/3/?bust=1521385793&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/3/?bust=1521385793&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/3/?bust=1521385793&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/3/?bust=1521385793&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/3/?bust=1521385793&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/4/?bust=1521385799&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/4/?bust=1521385799&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/4/?bust=1521385799&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/4/?bust=1521385799&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41207155/4/?bust=1521385799&width=50&-t.jpg",
                                    "@id": "4"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41207155"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Pit Bull Terrier"
                        }
                    },
                    "name": {
                        "$t": "Maverick"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "COURTESY POST.\n\nMeet Maverick!\n\nMaverick is such a wonderful canine! So sweet natured, he loves his humans. He will make someone an exceptional companion for life. \n\nMaverick's ideal home would be one that continues his training (he has been with a trainer and has done great), gives him daily sufficient exercise in the form of runs, walks, hikes, ball playing, etc., so he can burn off his energy and stay happy and balanced. A home that gives him structure and boundaries. And one that will give him a grain free diet (he does have food allergies, but doing really well on the diet he's on, just a matter of giving grain free). \n\nMaverick should go to an adult only home or one with kids over ten. He is a bit picky about the dogs he is with, but has had success with females over 50 lbs. (Meet 'n greets to ensure compatibility is always needed.). \n\nMaverick has come a long way, and he is such a great dog! He can only go to the most loving, caring home, one committed to him for life, we promised him that! \n\nMaverick is house trained and crate trained. He is about two and half years old and weighs about 70 lbs. He is utd on his shot and is neutered and healthy.\n\nWould like to know more? Arrange a visit? Please contact: ROAD TO HOME RESCUE at (315) 794-6372 (call or text)\n\nMAVERICK IS IN YORKVILLE, NY"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1041"
                    },
                    "lastUpdate": {
                        "$t": "2018-03-18T15:12:28Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "lorenmcauley@aol.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10017"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/1/?bust=1522183117&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/1/?bust=1522183117&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/1/?bust=1522183117&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/1/?bust=1522183117&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/1/?bust=1522183117&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/2/?bust=1522183127&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/2/?bust=1522183127&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/2/?bust=1522183127&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/2/?bust=1522183127&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/2/?bust=1522183127&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/3/?bust=1522183144&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/3/?bust=1522183144&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/3/?bust=1522183144&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/3/?bust=1522183144&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/3/?bust=1522183144&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/4/?bust=1522183158&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/4/?bust=1522183158&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/4/?bust=1522183158&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/4/?bust=1522183158&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41270604/4/?bust=1522183158&width=50&-t.jpg",
                                    "@id": "4"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41270604"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Staffordshire Bull Terrier"
                        }
                    },
                    "name": {
                        "$t": "Annie"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "MEET ANNIE!\n\nAnnie is one of those dogs that just captures your heart ... she is such a sweetheart! As her foster mom puts it, \"she is a love\". She loves to cuddle, loves to put her head on  your lap, loves to have her belly rub. \nShe also LOVES to play ball, and with her toys. \nPlus, she ADORES water! Baths, swims, a good run with the garden hose! \n\nAnnie is very trainable and eager to please. She's been learning her leash manners from a trainer and doing great. \n\nAnnie's ideal home? One that gives her lots of love, care and attention. Lots of walks and time outside in the fresh air. Though she might be fine with a submissive male (intros always needed); she would be perfectly okay as the solo queen bee. An adult only home or one with older kids. \n\n... And a home that loves her unconditionally and is committed to her for life, we promised this very special girl that!\n\nAnnie does have a missing eye (a mystery since she came to our rescue like that) but it does not impact her ONE bit, she does everything her two-eyed canine companions do! \n\nAnnie is house trained and crate trained (in fact she eats her dinner in her crate). She is about three years old and weighs a petite 50 lbs. She is utd and spayed.\n\nHave questions? Want to meet the amazing Annie? Please contact reboundhounds@gmail.com and her rescue will respond quickly, thanks!\n\nANNIE IS IN FOSTER IN KEENE, NEW HAMPSHIRE"
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY1041"
                    },
                    "lastUpdate": {
                        "$t": "2018-03-27T20:48:43Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": {
                            "$t": "hasShots"
                        }
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "lorenmcauley@aol.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10017"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/1/?bust=1515340369&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/1/?bust=1515340369&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/1/?bust=1515340369&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/1/?bust=1515340369&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/1/?bust=1515340369&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/2/?bust=1515340369&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/2/?bust=1515340369&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/2/?bust=1515340369&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/2/?bust=1515340369&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/2/?bust=1515340369&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/3/?bust=1515340370&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/3/?bust=1515340370&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/3/?bust=1515340370&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/3/?bust=1515340370&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/3/?bust=1515340370&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/4/?bust=1515340370&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/4/?bust=1515340370&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/4/?bust=1515340370&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/4/?bust=1515340370&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/4/?bust=1515340370&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/5/?bust=1516043264&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/5/?bust=1516043264&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/5/?bust=1516043264&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/5/?bust=1516043264&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/5/?bust=1516043264&width=50&-t.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/6/?bust=1515341688&width=60&-pnt.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/6/?bust=1515341688&width=95&-fpm.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/6/?bust=1515341688&width=500&-x.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/6/?bust=1515341688&width=300&-pn.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40581589/6/?bust=1515341688&width=50&-t.jpg",
                                    "@id": "6"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "40581589"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Shepherd"
                            },
                            {
                                "$t": "Pit Bull Terrier"
                            }
                        ]
                    },
                    "name": {
                        "$t": "PUPPIES! SHEP/PIT, 2 FEMALE, 1 MALE"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "PUPPIES! \n\nThree delicious six +month old pups, an \"oops\" litter that our rescue has put under its wing to get them vaccinated, spay/neutered, etc.\n\nAll four -- Leo, Frida and Daisy --  have amazing temperaments and are incredibly sweet, loving. They simply want to be petted and cuddled. \n\nOur amazing fosters are taking great care of them while they are prepared for their forever home. They are available for adoption now, and some lucky potential adopter can go and pick one (or two!). Two are brindle, and one female, Daisy, is tan. \n\nThey are shepherd/pit mixes (we know who the parents are), and are now about 45 lbs and will grow to be about 80. They are utd on their shots and will be spay/neutered shortly.\n\nInterested? Want to arrange a visit? Please contact reboundhounds@gmail.com and their rescue will get back to you shortly! Thanks!\n\nPUPS ARE IN ROCKAWAY, NY\n\n"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1041"
                    },
                    "lastUpdate": {
                        "$t": "2018-01-04T15:36:32Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "specialNeeds"
                            },
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "adopt@rescuzillanyc.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10017"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Senior"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/1/?bust=1522504272&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/1/?bust=1522504272&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/1/?bust=1522504272&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/1/?bust=1522504272&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/1/?bust=1522504272&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/2/?bust=1522504383&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/2/?bust=1522504383&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/2/?bust=1522504383&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/2/?bust=1522504383&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/2/?bust=1522504383&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/3/?bust=1522504554&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/3/?bust=1522504554&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/3/?bust=1522504554&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/3/?bust=1522504554&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/3/?bust=1522504554&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/4/?bust=1524014595&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/4/?bust=1524014595&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/4/?bust=1524014595&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/4/?bust=1524014595&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/4/?bust=1524014595&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/5/?bust=1524014595&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/5/?bust=1524014595&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/5/?bust=1524014595&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/5/?bust=1524014595&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41299873/5/?bust=1524014595&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41299873"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Chihuahua"
                            },
                            {
                                "$t": "Mixed Breed"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Mia"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Mia is as calm, cool and collected as a little chihuahua could come!  At 12yrs old, she is not easily bothered and she adjusts well to new people and new environments.  Been there, done that, she ain't impressed!  Just give her somewhere comfortable to lay and a tasty treat and she's good to go.  Our favorite thing about Mia is her silly face, which has a permanently confused look that will keep you laughing. She also gives the most gentle kisses, which smell a little more like roses these days thanks to a fresh dental cleaning from our veterinarian.  :)  Mia has lived with other dogs and is great around cats.  Email adopt@rescuzillanyc.org to meet her! \n"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY993"
                    },
                    "lastUpdate": {
                        "$t": "2018-03-31T13:56:39Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "specialNeeds"
                            },
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "adopt@rescuzillanyc.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10017"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Senior"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/1/?bust=1524592123&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/1/?bust=1524592123&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/1/?bust=1524592123&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/1/?bust=1524592123&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/1/?bust=1524592123&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/2/?bust=1524260451&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/2/?bust=1524260451&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/2/?bust=1524260451&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/2/?bust=1524260451&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/2/?bust=1524260451&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/3/?bust=1524260458&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/3/?bust=1524260458&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/3/?bust=1524260458&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/3/?bust=1524260458&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/3/?bust=1524260458&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/4/?bust=1524592123&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/4/?bust=1524592123&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/4/?bust=1524592123&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/4/?bust=1524592123&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/4/?bust=1524592123&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/5/?bust=1524592124&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/5/?bust=1524592124&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/5/?bust=1524592124&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/5/?bust=1524592124&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41451439/5/?bust=1524592124&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41451439"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Mixed Breed"
                            },
                            {
                                "$t": "Pit Bull Terrier"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Angus (Gus the Greatest!)"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Why should you love Angus?  Let us count the ways!  Gus is a 7-yrs young oddball who's always happy to be going wherever he's going - wherever that may be!  He looooves to meet people along the way when he's not busy pouncing on leaves as they blow across the sidewalk.  Despite some arthritis issues from an old injury, he has a playful pep in his step that inspires all his fans to narrate his every move in a dopey voice to match his silly energy -- and on the flip side, he can be determinedly lazy for 15 hrs straight while he practices his most inventive napping positions!  In his past life, Gus lived harmoniously with another dog, a cat, and children, and he has met some new dog friends since.  And to top it all off, he has an endless repertoire of googly-eyed facial expressions and choral stylings that will keep you laughing!  \n\nAngus is house-trained and well behaved when left alone in the house.  He is neutered, microchipped, vaccinated, and ready to find his special someone!  If you LOVE to snuggle and have a sense of humor to match his, email adopt@rescuzillanyc.org and prepare for a warm welcome!"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY993"
                    },
                    "lastUpdate": {
                        "$t": "2018-04-20T22:25:03Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "adopt@rescuzillanyc.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10017"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/1/?bust=1524013410&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/1/?bust=1524013410&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/1/?bust=1524013410&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/1/?bust=1524013410&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/1/?bust=1524013410&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/2/?bust=1524013411&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/2/?bust=1524013411&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/2/?bust=1524013411&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/2/?bust=1524013411&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/2/?bust=1524013411&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/3/?bust=1522506729&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/3/?bust=1522506729&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/3/?bust=1522506729&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/3/?bust=1522506729&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/3/?bust=1522506729&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/4/?bust=1524013412&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/4/?bust=1524013412&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/4/?bust=1524013412&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/4/?bust=1524013412&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/4/?bust=1524013412&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/5/?bust=1524013413&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/5/?bust=1524013413&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/5/?bust=1524013413&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/5/?bust=1524013413&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41300116/5/?bust=1524013413&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41300116"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Chihuahua"
                            },
                            {
                                "$t": "Mixed Breed"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Amy"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Amy is a cute-as-a-button 6yr old chihuahua whose moods range from feisty and playful to nervous and sweet - she is filled with personality!  She bonds quickly to her people and will wrap you around her little finger just as fast.  Amy's favorite activities include burrowing in cozy blankets and bedding, and playing fetch repeatedly at pitter-patter speed.  Amy has lived with other dogs and a cat.  Email adopt@rescuzillanyc.org to meet her!\n\nFor more photos:  https://www.facebook.com/pg/RescuzillaNYC/photos/?tab=album&album_id=1789095884460532\n\nPS. Amy has always been with her mom, Mia.  We'd love to keep them together if possible, but we think they'd do okay apart as well.  We hope to hear from you!"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY993"
                    },
                    "lastUpdate": {
                        "$t": "2018-03-31T14:36:48Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "(212) 271-2984"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {
                            "$t": "Between 1st Avenue & FDR Drive"
                        },
                        "email": {
                            "$t": "ManhattanAdoptions@bideawee.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10016"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "410 East 38th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/1/?bust=1527249013&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/1/?bust=1527249013&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/1/?bust=1527249013&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/1/?bust=1527249013&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/1/?bust=1527249013&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/2/?bust=1527249016&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/2/?bust=1527249016&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/2/?bust=1527249016&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/2/?bust=1527249016&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41721355/2/?bust=1527249016&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41721355"
                    },
                    "shelterPetId": {
                        "$t": "33361909"
                    },
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Chihuahua"
                            },
                            {
                                "$t": "Mixed Breed"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Katie"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "This lively and lovely fawn dog is Katie! Katie is six years old and came to Bideawee after her owner moved and could not keep Katie with her. Katie is a small dog (she only weighs 11 pounds) but boy does she have lots of personality! Katie is sweet as honey with people she knows. Shell roll over immediately for belly rubs and implore you to keep going if you ever think to stop. She also happily sits on your lap or gives kisses to your face. Katie can also be a little more timid with new people and so is looking for a patient family that will give her time to come out of her shell. At six years old, Katie has just the right amount of energy. She still loves to play and is quite a goofball with her toys. Shell dribble a ball around with her front paws or shake a stuffed animal until she cant shake it anymore. But shes also happy to relax while youre at work and take a couple of leisurely strolls during the day. Katie prefers not to share her food and would do best going home without young children. If shes caught your eye, come meet her today! "
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY479"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-25T09:43:59Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": {
                            "$t": "altered"
                        }
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "(212) 271-2984"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {
                            "$t": "Between 1st Avenue & FDR Drive"
                        },
                        "email": {
                            "$t": "ManhattanAdoptions@bideawee.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10016"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "410 East 38th Street"
                        }
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41199221/1/?bust=1521269317&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41199221/1/?bust=1521269317&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41199221/1/?bust=1521269317&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41199221/1/?bust=1521269317&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41199221/1/?bust=1521269317&width=50&-t.jpg",
                                    "@id": "1"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41199221"
                    },
                    "shelterPetId": {
                        "$t": "36668371"
                    },
                    "breeds": {
                        "breed": {
                            "$t": "Mixed Breed"
                        }
                    },
                    "name": {
                        "$t": "Barb"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "With her good looks and cheerful attitude, its no wonder this beauty was named Barbie! Barbie (formerly known as Barb) is nine months old and is as lovely as can be. Boasting a red coat with dainty white markings  shes about as beautiful as they come. But Barbie hopes you realize theres more to her than just dashing good looks. Barbie is a wonderfully happy and sweet dog. Despite her size (she already weighs 53 pounds), Barbie thinks shes a lap dog and is always up for a good snuggle. She is always thrilled to see one of her good friends and her whole body will wiggle with excitement as she watches them approach. Barbie is a little more nervous around new men and so she hopes theyll be patient with her as she comes out of her shell. Barbie has a lot of energy and is hoping for somebody who will help her exercise and explore the world around her. Long walks and trips to the park are ideal! Barbie is still working on her basic manners and is looking for an owner who will be consistent and focused with her so that she can ace her skills! Barbie gets along well with other playful dogs but a meet and greet is always recommended. Barbie prefers not to share her food and would do best in a home without young children. If this perfect pup speaks to you, adopt her today! "
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY479"
                    },
                    "lastUpdate": {
                        "$t": "2018-03-17T05:51:25Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": {
                            "$t": "altered"
                        }
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "(212) 271-2984"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {
                            "$t": "Between 1st Avenue & FDR Drive"
                        },
                        "email": {
                            "$t": "ManhattanAdoptions@bideawee.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10016"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "410 East 38th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/1/?bust=1527018725&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/1/?bust=1527018725&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/1/?bust=1527018725&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/1/?bust=1527018725&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/1/?bust=1527018725&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/2/?bust=1527018726&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/2/?bust=1527018726&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/2/?bust=1527018726&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/2/?bust=1527018726&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/2/?bust=1527018726&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/3/?bust=1527018727&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/3/?bust=1527018727&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/3/?bust=1527018727&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/3/?bust=1527018727&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41383012/3/?bust=1527018727&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41383012"
                    },
                    "shelterPetId": {
                        "$t": "37903193"
                    },
                    "breeds": {
                        "breed": {
                            "$t": "Mixed Breed"
                        }
                    },
                    "name": {
                        "$t": "Ibrahim"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "This adorable pooch is Ibrahim! Donning a bright face, long body, and short legs, he couldnt be anymore charming! What breed he is, we dont know but he truly looks like you mixed together some of the best. Perhaps a Labrador Retriever head on a Corgi body? Or a Basset Hound thrown in there? Theres no way to tell for sure but boy is he unique! At one years old and only 24 pounds, Ibrahim is a young dog and full of energy. He is over-spilling with enthusiasm for life. Ibrahim love, loves to play and so he would do best going home with an active family. Luckily, hes easy to entertain with a chew toy or a bouncing ball. Ibrahim loves to be the center of attention and so he should be the only animal in the household. Because he prefers not to be around other dogs, were hoping he can find a house with a backyard out of the hustle and bustle of the city. Ibrahim still needs to learn his manners and until he does, he would do best going home without young children. However, he's pretty housebroken and should adjust to a new schedule with only a few accidents. If this adorable pup speaks to you  come meet Ibrahim today! "
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY479"
                    },
                    "lastUpdate": {
                        "$t": "2018-04-12T00:12:13Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": {
                            "$t": "altered"
                        }
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "(212) 271-2984"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {
                            "$t": "Between 1st Avenue & FDR Drive"
                        },
                        "email": {
                            "$t": "ManhattanAdoptions@bideawee.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10016"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "410 East 38th Street"
                        }
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/1/?bust=1525844881&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/1/?bust=1525844881&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/1/?bust=1525844881&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/1/?bust=1525844881&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/1/?bust=1525844881&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/2/?bust=1525844882&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/2/?bust=1525844882&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/2/?bust=1525844882&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/2/?bust=1525844882&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/2/?bust=1525844882&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/3/?bust=1525844882&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/3/?bust=1525844882&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/3/?bust=1525844882&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/3/?bust=1525844882&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41588833/3/?bust=1525844882&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41588833"
                    },
                    "shelterPetId": {
                        "$t": "37995246"
                    },
                    "breeds": {
                        "breed": {
                            "$t": "Mixed Breed"
                        }
                    },
                    "name": {
                        "$t": "Samantha"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Give a warm welcome to Samantha! Samantha is a three year old love-bug who cannot wait to go home! She originally hails from Puerto Rico but it turns out that she loves the snow so perhaps she was always a New Yorker at heart. In addition to loving the snow, Samantha appears to love everything! She adores meeting new people and is always friendly and loving. Samantha gets along well with other dogs and has made quite a few canine friends here at Bideawee. But because of her size, she weighs 52 pounds, she should definitely meet any future fur siblings before she joins the household. Samanthas dream household would have loving, patient parents who will work with her to learn her basic manners (she loves to give hugs when she sees a friend). She would also love someone who will help her get the exercise a young dog like her needs to be healthy and happy. Samantha is hoping for an owner whose experienced with large breeds and will give her the time she needs to adjust once she leaves Bideawee. Samantha is housebroken although it may take her some time to get used to a new schedule. If Samantha is your dream pup, adopt her today! "
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY479"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-09T04:19:18Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": {
                            "$t": "altered"
                        }
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "(212) 271-2984"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {
                            "$t": "Between 1st Avenue & FDR Drive"
                        },
                        "email": {
                            "$t": "ManhattanAdoptions@bideawee.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10016"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "410 East 38th Street"
                        }
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/1/?bust=1526743842&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/1/?bust=1526743842&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/1/?bust=1526743842&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/1/?bust=1526743842&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/1/?bust=1526743842&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/2/?bust=1526743846&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/2/?bust=1526743846&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/2/?bust=1526743846&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/2/?bust=1526743846&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/2/?bust=1526743846&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/3/?bust=1526743850&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/3/?bust=1526743850&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/3/?bust=1526743850&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/3/?bust=1526743850&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41672302/3/?bust=1526743850&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41672302"
                    },
                    "shelterPetId": {
                        "$t": "35755397"
                    },
                    "breeds": {
                        "breed": [
                            {
                                "$t": "German Shepherd Dog"
                            },
                            {
                                "$t": "Mixed Breed"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Norma"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Gentle and sweet as a bunny rabbit, Norma here is ready to hop her way into your heart. Norma is a one year old medium-mixed breed dog. She has that classic movie-star dog look. A tan shepherd coat with black markings strewn throughout. Shes 39 pounds, which makes her the perfect size for city apartments. Norma is a shy and timid but loving dog. While shes not quick to approach new people, given time and a gentle encouragement (a few treats), shes sure to come out of her shell. Once Norma is comfortable, shes a true puppy at heart. She adores playing with toys and will light up at the sound of a squeaker. Norma also love, love, loves dogs and would be smitten with a fur brother. Shes still working on her manners and becoming housebroken. Come adopt Norma today! "
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY479"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-19T12:38:53Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": {
                            "$t": "altered"
                        }
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "(212) 271-2984"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {
                            "$t": "Between 1st Avenue & FDR Drive"
                        },
                        "email": {
                            "$t": "ManhattanAdoptions@bideawee.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10016"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "410 East 38th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/1/?bust=1526874544&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/1/?bust=1526874544&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/1/?bust=1526874544&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/1/?bust=1526874544&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/1/?bust=1526874544&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/2/?bust=1526874545&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/2/?bust=1526874545&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/2/?bust=1526874545&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/2/?bust=1526874545&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/2/?bust=1526874545&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/3/?bust=1526874546&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/3/?bust=1526874546&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/3/?bust=1526874546&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/3/?bust=1526874546&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41683839/3/?bust=1526874546&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41683839"
                    },
                    "shelterPetId": {
                        "$t": "37835040"
                    },
                    "breeds": {
                        "breed": {
                            "$t": "Mixed Breed"
                        }
                    },
                    "name": {
                        "$t": "Annie Jo"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "This spunky young girl is Annie Jo! Annie Jo came to Bideawee from Alabama. She is a 3 year old, large mixed breed who is always looking to play and say hi to everyone she meets! Whether it's playing with a volunteer or playing with her toys, Annie Jo is outgoing and energetic. Annie Jos ideal adopter would provide her with a lot of outdoor and social time. Our beautiful girl is interested in other dogs but isnt quite sure how shes supposed to play with them. This means that Annie Jo would do best going home to somebody who will give her playdates with other friendly pups so she can overcome her shyness. While Annie Jo has been working on it here, she is not fully housebroken. Annie Jo could still learn some of her basic manners, but is an intelligent girl and a quick learner! Her dream home would have a backyard or would go on lots of adventures with her out of the city. If you think Annie Jo would be the companion for you, come meet her today at Bideawee! **I will be at Adoptapalooza in Union Square today, 5/20 from 12:00pm - 5:00pm** "
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY479"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-21T02:16:48Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": {
                            "$t": "altered"
                        }
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "(212) 271-2984"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {
                            "$t": "Between 1st Avenue & FDR Drive"
                        },
                        "email": {
                            "$t": "ManhattanAdoptions@bideawee.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10016"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "410 East 38th Street"
                        }
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/1/?bust=1527073274&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/1/?bust=1527073274&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/1/?bust=1527073274&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/1/?bust=1527073274&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/1/?bust=1527073274&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/2/?bust=1527073281&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/2/?bust=1527073281&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/2/?bust=1527073281&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/2/?bust=1527073281&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41701414/2/?bust=1527073281&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41701414"
                    },
                    "shelterPetId": {
                        "$t": "38039693"
                    },
                    "breeds": {
                        "breed": {
                            "$t": "Mixed Breed"
                        }
                    },
                    "name": {
                        "$t": "Hope"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Have you been wishing for a fun, athletic, loving, and devoted dog to bring home? Someone who will join you on endless adventures? Greet you every day after work with a happy smile and big (slobbery) kiss? Well theres no need to wish, because Hope is ready for you! Hope is a year and a half old lady who came all the way from Georgia to meet her forever family. Her beauty is quick to catch your eye as she flaunts a tan coat with white markings and chocolate brown eyes. Despite weighing in at 43 pounds, Hope has no idea that shes a large dog. In fact, a lot of the time you see her shell be hugging a volunteer or snuggled in someones lap. Hope is quite affectionate and were sure whoever adopts will spend a lot of time cuddling with her. But like any young dog she needs her fair share of exercise! Hope really enjoys her walks outside and was a big fan of our recent snow fall. We can only imagine shell enjoy her future outdoor adventures as much. Hope is not yet housebroken and still needs to learn her basic manners. If you hope for Hope to be your future pup, come meet her today! "
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY479"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-23T08:19:45Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {},
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "(212) 271-2984"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {
                            "$t": "Between 1st Avenue & FDR Drive"
                        },
                        "email": {
                            "$t": "ManhattanAdoptions@bideawee.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10016"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "410 East 38th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41641909/1/?bust=1526444673&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41641909/1/?bust=1526444673&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41641909/1/?bust=1526444673&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41641909/1/?bust=1526444673&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41641909/1/?bust=1526444673&width=50&-t.jpg",
                                    "@id": "1"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41641909"
                    },
                    "shelterPetId": {
                        "$t": "33661963"
                    },
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Rat Terrier"
                            },
                            {
                                "$t": "Mixed Breed"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Miracle"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "We think it's a miracle that Miracle is here at Bideawee and waiting for you to love and adopt him! Miracle came to Bideawee in late November after his owners could no longer care for him. Miracle is a delightful Rat Terrier mix with an infectious smile and pretty tri-color coat. Miracle is a truly sensitive soul who is looking for a calm, loving, and gentle household to call his own. Miracle is also looking for an owner who will help him realize that the world is not such a scary place. Hes made progress since coming to Bideawee and we are continuously working on helping him adjust to his new life. Miracle is loving and will seek out affection but he prefers to be handled on his own terms. With patience and love we know he will become an affectionate lap dog. If youve been looking far and wide for a dog as sweet as him, come meet Miracle today! "
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY479"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-16T02:25:46Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "(877) 739-3582"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "renpyrgroup@yahoo.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10016"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "XL"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/1/?bust=1522424754&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/1/?bust=1522424754&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/1/?bust=1522424754&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/1/?bust=1522424754&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/1/?bust=1522424754&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/2/?bust=1522424762&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/2/?bust=1522424762&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/2/?bust=1522424762&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/2/?bust=1522424762&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/2/?bust=1522424762&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/3/?bust=1522424770&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/3/?bust=1522424770&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/3/?bust=1522424770&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/3/?bust=1522424770&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41293788/3/?bust=1522424770&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41293788"
                    },
                    "shelterPetId": {
                        "$t": "NGPR-2540-F"
                    },
                    "breeds": {
                        "breed": {
                            "$t": "Great Pyrenees"
                        }
                    },
                    "name": {
                        "$t": "Lizzy in NY - adopted"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "ADOPTION PENDING. You can see more of these beautiful dogs by going to  NGPR RESCUE DOGS at  https://nationalpyr.org/adoptable-dogs\n\nNYS Registered Rescue # RR102\nView full listing, fee and online application at - www.nationalpyr.org/rescue-dogs (sorry, no phone submissions, but if you would like more information you can call 877-739-3582 or email us at renpyrgroup@yahoo.com).\n\nSecure VISIBLE fencing is required; invisible fencing WILL NOT contain this breed.\nNGPR does not adopt dogs to homes with children under 6 years old.\nPrevious dog experience is required, preferably large breed.\n\nFemale Great Pyrenees rarely cohabitate with other females successfully.  Our goal is for each adoption to be a permanent placement, therefore homes that already have a female dog are not eligible to adopt a female Pyr.\n\nSweet Lizzy is a stunning adult Great Pyrenees just waiting for her chance to shine. She LOVES people and therefore likes to be by your side. In fact, sheâ\u0080\u0099s a leaner and will meld into your leg so hard that passersby may have difficulty distinguishing where you end and Lizzy begins :) She thrives on human attention! Lizzy would be fine as an only dog, but a medium-to-large companion pup could be fun, too, so long as heâ\u0080\u0099s on the calmer side. This social girl rides well in the car and does great on a leash. Her ideal home will have a secure, 6-foot fence for her romping pleasure. Lizzy is sure to make a wonderful companion and is so very ready for her furever home!"
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY695"
                    },
                    "lastUpdate": {
                        "$t": "2018-03-30T15:46:40Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "specialNeeds"
                            },
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "noKids"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "amber@evessanctuary.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10036"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Senior"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/1/?bust=1479095243&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/1/?bust=1479095243&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/1/?bust=1479095243&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/1/?bust=1479095243&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/1/?bust=1479095243&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/2/?bust=1498719393&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/2/?bust=1498719393&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/2/?bust=1498719393&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/2/?bust=1498719393&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36495234/2/?bust=1498719393&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "36495234"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Chihuahua"
                        }
                    },
                    "name": {
                        "$t": "Teeters - 2lbs"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Rescued from a hoarder situation, she is very very shy. She prefers to live in the walled city of a playpen or cage, with the door open and a pee pad right outside the door. She will mever be a leash walker and precers to stay indoors. But with a confined area, and some grass, after a walk yo that area on a secure bag....she does love grass! She also loves cappers a handicapable pom she met in rescue. \n\nEve's Sanctuary does not have a public location to visit, although we do weekly adoption events in public locations on the UWS. If you are interested in a specific animal, please email info@evessanctuary.com with the name of the animal you are interested in written on the subject line. Please remember that ESAR requires a full complete application, an interview, and a home visit prior to final approval and placement of adopted animals. It may seem daunting at first, but to find true love its worth it, right? They aren't products on a shelf to buy, we love them like our own, and only want the best possible home for each and every one...thus the \"hoops.\" Also, please trust our recommendations, we are skilled human furry freind matchmakers with many years of experience that has given us a unique and solid perspective. For these reasons we prefer adopters to be in NYC or the immediate area accessible by public transportation so we can work with you individually and educate you face to face!\nAdditionally, please understand that we are all volunteers, no salaries are paid, we have families and pets of our own, and we have full time jobs in addition to doing rescue work - so we may be (at times) slow-ish to get back to you. We promise we are doing our best as its in everyones best interest to place these darlings quickly, so we can save more. If you would like to expedite the process, and make us extra happy, please download our application from our website at: http://www.evessanctuary.org/Adoption.html , fill it out, and return it with your initial email inquiry. Be patient, be persistent, be polite, and we promise all will be well! ;-)\nAll animals come up to date on annual combo vaccs, rabies vaccs, heartworm tested negative, microchipped, and of course...spayed or neutered!"
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY679"
                    },
                    "lastUpdate": {
                        "$t": "2016-10-16T20:14:47Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "noKids"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "amber@evessanctuary.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10036"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/1/?bust=1527710626&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/1/?bust=1527710626&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/1/?bust=1527710626&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/1/?bust=1527710626&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/1/?bust=1527710626&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/2/?bust=1527710626&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/2/?bust=1527710626&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/2/?bust=1527710626&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/2/?bust=1527710626&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/2/?bust=1527710626&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/3/?bust=1527710626&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/3/?bust=1527710626&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/3/?bust=1527710626&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/3/?bust=1527710626&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/3/?bust=1527710626&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/4/?bust=1527710627&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/4/?bust=1527710627&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/4/?bust=1527710627&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/4/?bust=1527710627&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41712856/4/?bust=1527710627&width=50&-t.jpg",
                                    "@id": "4"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41712856"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Yorkshire Terrier Yorkie"
                            },
                            {
                                "$t": "Pomeranian"
                            }
                        ]
                    },
                    "name": {
                        "$t": "lillah"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Lillah was surrendered by her owner who was pregnant and worried she couldnâ\u0080\u0099t handle a baby and a puppy.  Lillah is just over 1yr old and an active eager little lady. In her previous home she was somewhat isolated so initially she spooked easily and was timid and a touch growls - after 2 dayâ\u0080\u0099s in rescue she is now submissive but outgoing and always has her tail wagging. Due to her initial fear we donâ\u0080\u0099t recommend young children who donâ\u0080\u0099t understand dog boundaries.  She adores other dogs and has become the pack leader in our dog run, despite her gentle submissive belly up nature with her caregiver. As a home schooled lady she just needs to learn the world is bigger than she thought and strangers donâ\u0080\u0099t all present danger.  While she looks like a Maltese yorkie Norwich type dog, she has a lot of Pomeranian personality including a penchant for the Pomeranian wave when begging for attention so we listed her as that mix. Her exact heritage is obviously unknown, but cute has been confirmed!\n\nEve's Sanctuary does not have a public location to visit, although we do weekly adoption events in public locations on the UWS. If you are interested in a specific animal, please email info@evessanctuary.com with the name of the animal you are interested in written on the subject line. Please remember that ESAR requires a full complete application, an interview, and a home visit prior to final approval and placement of adopted animals. It may seem daunting at first, but to find true love its worth it, right? They aren't products on a shelf to buy, we love them like our own, and only want the best possible home for each and every one...thus the \"hoops.\" Also, please trust our recommendations, we are skilled human furry freind matchmakers with many years of experience that has given us a unique and solid perspective. For these reasons we prefer adopters to be in NYC or the immediate area accessible by public transportation so we can work with you individually and educate you face to face!\nAdditionally, please understand that we are all volunteers, no salaries are paid, we have families and pets of our own, and we have full time jobs in addition to doing rescue work - so we may be (at times) slow-ish to get back to you. We promise we are doing our best as its in everyones best interest to place these darlings quickly, so we can save more. If you would like to expedite the process, and make us extra happy, please download our application from our website at: http://www.evessanctuary.org/Adoption.html , fill it out, and return it with your initial email inquiry. Be patient, be persistent, be polite, and we promise all will be well! ;-)\nAll animals come up to date on annual combo vaccs, rabies vaccs, heartworm tested negative, microchipped, and of course...spayed or neutered!"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY679"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-24T15:29:00Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "amber@evessanctuary.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10036"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/1/?bust=1527710677&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/1/?bust=1527710677&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/1/?bust=1527710677&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/1/?bust=1527710677&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/1/?bust=1527710677&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/2/?bust=1527710678&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/2/?bust=1527710678&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/2/?bust=1527710678&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/2/?bust=1527710678&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/2/?bust=1527710678&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/3/?bust=1527710678&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/3/?bust=1527710678&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/3/?bust=1527710678&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/3/?bust=1527710678&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/3/?bust=1527710678&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/4/?bust=1527710679&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/4/?bust=1527710679&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/4/?bust=1527710679&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/4/?bust=1527710679&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41631814/4/?bust=1527710679&width=50&-t.jpg",
                                    "@id": "4"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41631814"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Chihuahua"
                        }
                    },
                    "name": {
                        "$t": "Mooshu"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Very sweet, gentle, kissy, foodie, loyal, super submissive chi girl. Wouldnâ\u0080\u0099t mind traveling around with you in a handbag, but not a great leash walker as she is very timid in loud and unfamiliar environments. Likes dog park time if there are other chis, plays well with other small dogs and could care less about cats. Wouldnâ\u0080\u0099t mind being a house dog if you are a stay at home pet parent as she is needy and likes lazy lap and kissy time more than daily walks. Peeped pad trained, but fostered without rugs jic. Would prefer to follow the lead of a city savvy dog, and would languish alone at home so prefer homes with another gentle small dog or a work from home parent. She is a loyal companion for life and will stare lovingly into your eyes until your heart breaks into a million pieces, sooooo sweet. \n\nEve's Sanctuary does not have a public location to visit, although we do weekly adoption events in public locations on the UWS. If you are interested in a specific animal, please email info@evessanctuary.com with the name of the animal you are interested in written on the subject line. Please remember that ESAR requires a full complete application, an interview, and a home visit prior to final approval and placement of adopted animals so for faster processing please include a complete application as well. It may seem daunting at first, but to find true love its worth it, right? They aren't products on a shelf to buy, we love them like our own, and only want the best possible home for each and every one...thus the \"hoops.\" Also, please trust our recommendations, we are skilled human furry freind matchmakers with many years of experience that has given us a unique and solid perspective. For these reasons we prefer adopters to be in NYC or the immediate area accessible by public transportation so we can work with you individually and educate you face to face!\nAdditionally, please understand that we are all volunteers, no salaries are paid, we have families and pets of our own, and we have full time jobs in addition to doing rescue work - so we may be (at times) slow-ish to get back to you. We promise we are doing our best as its in everyones best interest to place these darlings quickly, so we can save more. If you would like to expedite the process, and make us extra happy, please download our application from our website at: http://www.evessanctuary.org/Adoption.html , fill it out, and return it with your initial email inquiry. Be patient, be persistent, be polite, and we promise all will be well! ;-)\nAll animals come up to date on annual combo vaccs, rabies vaccs, heartworm tested negative, microchipped, and of course...spayed or neutered!"
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY679"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-15T02:16:55Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            },
                            {
                                "$t": "noCats"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "501-615-3844"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "info@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/1/?bust=1445768110&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/1/?bust=1445768110&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/1/?bust=1445768110&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/1/?bust=1445768110&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/1/?bust=1445768110&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/2/?bust=1445768110&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/2/?bust=1445768110&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/2/?bust=1445768110&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/2/?bust=1445768110&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/2/?bust=1445768110&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/3/?bust=1445768110&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/3/?bust=1445768110&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/3/?bust=1445768110&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/3/?bust=1445768110&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/22629663/3/?bust=1445768110&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "22629663"
                    },
                    "shelterPetId": {
                        "$t": "009"
                    },
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Black Labrador Retriever"
                            },
                            {
                                "$t": "Terrier"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Max"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "PLAY WITH ME!! You can see it in my eyes, right? Hey there-this isÂ Max thanking you for checking me out. If you can't already tell from my photos and video that I am a fun loving guy, let me just assure you that I LOVE to play. Some things happened in my owner's life that made it hard to keep a dog around, so now I have a big yard to play with some of my dog buddies at the All About Labs ranch. IÂ was born in 2008 and even though I am super playful, I am crate trained too (but would need some outdoor time for playfulness);  get along with people large or small as long as they are loving and want to play, but I would probably do better in a home without really small children because they might not be able to keep up with my energy. If you are looking for a canine buddy and want somebody who loves to play, contact the AAL folks for some more information at  at  info@allaboutlabs.org"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2012-04-01T21:28:58Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "501-615-3844"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "info@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/1/?bust=1445768110&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/1/?bust=1445768110&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/1/?bust=1445768110&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/1/?bust=1445768110&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/1/?bust=1445768110&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/2/?bust=1445768110&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/2/?bust=1445768110&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/2/?bust=1445768110&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/2/?bust=1445768110&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/2/?bust=1445768110&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/3/?bust=1445768110&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/3/?bust=1445768110&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/3/?bust=1445768110&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/3/?bust=1445768110&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/29440439/3/?bust=1445768110&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "29440439"
                    },
                    "shelterPetId": {
                        "$t": "007"
                    },
                    "breeds": {
                        "breed": {
                            "$t": "Shepherd"
                        }
                    },
                    "name": {
                        "$t": "Lanie"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Lannie here! I am a good girl with TONS of personality. I love children, other dogs and I have a nowmal interest in cats. I am house broken, crate trained, spayed , utd on shots, heartworm negative, on hw prevention and flea and tick meds...If you are interested in me please contact All About Labs at info@allaboutlabs@yahoo.com but you better hurry cuz someone has specail as me won't be around long!"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2014-06-09T11:13:00Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            },
                            {
                                "$t": "noCats"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "501-615-3844"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "info@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/1/?bust=1476553865&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/1/?bust=1476553865&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/1/?bust=1476553865&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/1/?bust=1476553865&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/1/?bust=1476553865&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/2/?bust=1476553866&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/2/?bust=1476553866&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/2/?bust=1476553866&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/2/?bust=1476553866&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/2/?bust=1476553866&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/3/?bust=1445768112&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/3/?bust=1445768112&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/3/?bust=1445768112&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/3/?bust=1445768112&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134319/3/?bust=1445768112&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "30134319"
                    },
                    "shelterPetId": {
                        "$t": "015"
                    },
                    "breeds": {
                        "breed": {
                            "$t": "Labrador Retriever"
                        }
                    },
                    "name": {
                        "$t": "George"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "George is a six year old yellow Lab Mix. George is neutered, utd on shots, housebroken, cratetrained, on HW prevention & flea & tick prevention. George likes other dogs but does not like cats at all. George will do best in an active home where he can be part of the family fun. If you are interested in this handsome boy please contact AAL at info@allaboutlabs.org"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2014-08-26T20:25:18Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "501-615-3844"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "info@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/1/?bust=1445768110&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/1/?bust=1445768110&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/1/?bust=1445768110&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/1/?bust=1445768110&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/1/?bust=1445768110&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/2/?bust=1445768110&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/2/?bust=1445768110&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/2/?bust=1445768110&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/2/?bust=1445768110&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/2/?bust=1445768110&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/3/?bust=1476553779&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/3/?bust=1476553779&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/3/?bust=1476553779&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/3/?bust=1476553779&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/30134478/3/?bust=1476553779&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "30134478"
                    },
                    "shelterPetId": {
                        "$t": "016"
                    },
                    "breeds": {
                        "breed": {
                            "$t": "Labrador Retriever"
                        }
                    },
                    "name": {
                        "$t": "Lettie"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Lettie is a 2-3 year old spay Female lab mix . Lette was found with her daughter who has been adopted. Lette is HW positive and has started her HW pretreatment meds. Lette is spay, microchipped, utd on shots, housebroken, cratetrained, on HW prevention and flea and tick prevention. Lette gets along with other dogs and \ncats. Lettie is shy but very sweet. If you are interested in this sweet girl please conatct AAL @ info@allaboutlabs.org"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2014-08-26T20:55:46Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {
                            "$t": "501-615-3844"
                        },
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "info@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/30839069/1/?bust=1445768110&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/30839069/1/?bust=1445768110&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/30839069/1/?bust=1445768110&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/30839069/1/?bust=1445768110&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/30839069/1/?bust=1445768110&width=50&-t.jpg",
                                    "@id": "1"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "30839069"
                    },
                    "shelterPetId": {
                        "$t": "Sherwood Shelter"
                    },
                    "breeds": {
                        "breed": [
                            {
                                "$t": "German Shepherd Dog"
                            },
                            {
                                "$t": "Labrador Retriever"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Taffy"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Taffy is Happy! Taffy is a 2 year old Sheperd/Lab mix who is heartworm neg, up to date on shots, spay, microchipped, housebroken and is working on her cratetraining. Taffy likes other dogs and loves to play. If you are interested in this beautiful girl please contact All About Labs @ info@allaboutlabs.org"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2014-11-18T20:22:03Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "gina@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Senior"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/1/?bust=1476554173&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/1/?bust=1476554173&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/1/?bust=1476554173&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/1/?bust=1476554173&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/1/?bust=1476554173&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/2/?bust=1476554173&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/2/?bust=1476554173&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/2/?bust=1476554173&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/2/?bust=1476554173&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/2/?bust=1476554173&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/3/?bust=1476554174&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/3/?bust=1476554174&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/3/?bust=1476554174&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/3/?bust=1476554174&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486596/3/?bust=1476554174&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "36486596"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Labrador Retriever"
                        }
                    },
                    "name": {
                        "$t": "Captain Jack Harkness"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Capt. Jack Harkness is about 7-8 years old. He likes children and gets along with other dogs."
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2016-10-15T17:56:13Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "gina@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/1/?bust=1476554289&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/1/?bust=1476554289&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/1/?bust=1476554289&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/1/?bust=1476554289&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/1/?bust=1476554289&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/2/?bust=1476554290&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/2/?bust=1476554290&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/2/?bust=1476554290&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/2/?bust=1476554290&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/2/?bust=1476554290&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/3/?bust=1476554290&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/3/?bust=1476554290&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/3/?bust=1476554290&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/3/?bust=1476554290&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486635/3/?bust=1476554290&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "36486635"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Labrador Retriever"
                        }
                    },
                    "name": {
                        "$t": "Dixie"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Dixie is about 1-2 years old. She is good with children and gets along with other dogs,"
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2016-10-15T17:58:09Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "noCats"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "gina@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486730/1/?bust=1476554655&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486730/1/?bust=1476554655&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486730/1/?bust=1476554655&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486730/1/?bust=1476554655&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36486730/1/?bust=1476554655&width=50&-t.jpg",
                                    "@id": "1"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "36486730"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Labrador Retriever"
                        }
                    },
                    "name": {
                        "$t": "Buddy"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Buddy is about 2-4 years old. He loves children. Buddy does not like small dogs or cats."
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2016-10-15T18:04:15Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "gina@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/1/?bust=1476737651&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/1/?bust=1476737651&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/1/?bust=1476737651&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/1/?bust=1476737651&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/1/?bust=1476737651&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/2/?bust=1476737651&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/2/?bust=1476737651&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/2/?bust=1476737651&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/2/?bust=1476737651&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/2/?bust=1476737651&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/3/?bust=1476737652&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/3/?bust=1476737652&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/3/?bust=1476737652&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/3/?bust=1476737652&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503931/3/?bust=1476737652&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "36503931"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Labrador Retriever"
                        }
                    },
                    "name": {
                        "$t": "Neely"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Kelly is about 3- 4 yrs old. She is spayed and gets along with other dogs. She loves children."
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2016-10-17T20:54:11Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            },
                            {
                                "$t": "noCats"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "gina@allaboutlabs.org"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10019"
                        },
                        "fax": {},
                        "address1": {
                            "$t": "149 West 10th Street"
                        }
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/1/?bust=1476737959&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/1/?bust=1476737959&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/1/?bust=1476737959&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/1/?bust=1476737959&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/1/?bust=1476737959&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/2/?bust=1476737960&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/2/?bust=1476737960&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/2/?bust=1476737960&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/2/?bust=1476737960&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36503993/2/?bust=1476737960&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "36503993"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Jack Russell Terrier (Parson)"
                        }
                    },
                    "name": {
                        "$t": "Lefty"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Lefty is 1- 2 yrs old. He is neutered. He gets along with other dogs."
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY599"
                    },
                    "lastUpdate": {
                        "$t": "2016-10-17T20:57:50Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            },
                            {
                                "$t": "noKids"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/1/?bust=1473822488&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/2/?bust=1473822489&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/36223058/3/?bust=1495825630&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "36223058"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rottweiler"
                        }
                    },
                    "name": {
                        "$t": "Roxie! **FOSTER NEEDED**"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Roxie is a 5 year old, 80 pound Rottweiler mix. She is very affectionate and loves people. Roxie does not do well with cats and prefers to be the only pet in the household.  \n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nRoxie's Adoption Donation is: $400\n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram and twitter: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2016-09-14T03:08:08Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "noDogs"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/1/?bust=1497115078&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/1/?bust=1497115078&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/1/?bust=1497115078&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/1/?bust=1497115078&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/1/?bust=1497115078&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/2/?bust=1490961765&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/2/?bust=1490961765&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/2/?bust=1490961765&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/2/?bust=1490961765&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/2/?bust=1490961765&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/3/?bust=1497128917&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/3/?bust=1497128917&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/3/?bust=1497128917&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/3/?bust=1497128917&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/37748182/3/?bust=1497128917&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "37748182"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Boxer"
                            },
                            {
                                "$t": "Pit Bull Terrier"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Allie! **FOSTER NEEDED**"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Allie is a 7 year old, 45 pound Boxer/Pit Bull mix! She is just the sweetest girl. Allie loves attention and will be a great walking or running buddy to help you get ready for the beach this summer.  Her face lights up when she sees someone coming to give her attention.  Her tail is always wagging and she loves giving kisses and cuddling. Allie prefers to be the only dog in the home.  She's a Princess and wants all the your attention but she does get along with cats! She realizes dogs rule so is fine sharing attention with a cat. She is coming to NYC and needs a foster home or an adopter! If approved, fosters have first priority for adoption. Fostering is a great way to make sure the pup fits in with your lifestyle!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application! \nAdoption Fee: $400\nwww.pupstarzrescue.org ?Please Follow us on Instagram and twitter: @pupstarzrescue?Like us on FaceBook! www.facebook.com/PupStarzRescue\n"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2017-03-31T12:02:44Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "noDogs"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/1/?bust=1506477808&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/1/?bust=1506477808&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/1/?bust=1506477808&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/1/?bust=1506477808&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/1/?bust=1506477808&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/2/?bust=1506477811&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/2/?bust=1506477811&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/2/?bust=1506477811&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/2/?bust=1506477811&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/39494495/2/?bust=1506477811&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "39494495"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Pit Bull Terrier"
                        }
                    },
                    "name": {
                        "$t": "Ella **FOSTER NEEDED**"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Ella is a 41 pound, 1 year old Pit Bull mix! She is very friendly and loves her humans. She is coming to NYC and needs a foster home or an adopter! If approved, fosters have first priority for adoption. Fostering is a great way to make sure the pup fits in with your lifestyle!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram and twitter: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2017-09-27T02:02:24Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/1/?bust=1511140651&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/1/?bust=1511140651&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/1/?bust=1511140651&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/1/?bust=1511140651&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/1/?bust=1511140651&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/2/?bust=1511140651&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/2/?bust=1511140651&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/2/?bust=1511140651&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/2/?bust=1511140651&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/2/?bust=1511140651&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/3/?bust=1518757552&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/3/?bust=1518757552&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/3/?bust=1518757552&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/3/?bust=1518757552&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/3/?bust=1518757552&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/4/?bust=1518757552&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/4/?bust=1518757552&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/4/?bust=1518757552&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/4/?bust=1518757552&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/4/?bust=1518757552&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/5/?bust=1518757553&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/5/?bust=1518757553&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/5/?bust=1518757553&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/5/?bust=1518757553&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/39665796/5/?bust=1518757553&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "39665796"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Boxer"
                            },
                            {
                                "$t": "Pit Bull Terrier"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Cora"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Say hello to Cora, a regal-looking 6-year-old, 35-pound Boxer/Pittie mix, who is smart, sweet, affectionate and comes with the prettiest pair of white booties you'll never see in any shoe store!\n\nThis well-mannered, perfectly housebroken, people-oriented girl is one of those hardy outdoorsy types who LOVES to exercise, breathe in the fresh air, and burn off some calories on a walk! After a good workout, she likes to chill out, just relax, and maybe take a nap! Hey, don't we all?\n\nShe is extremely well-trained and knows several commands including sit, lay down, go to bed, and give a paw. She is very obedient with her commands and walks wonderfully on a leash. \n\nHer foster mom says: she is the most gentle dog Iâ\u0080\u0099ve EVER met. This exceptional, energetic, adaptable lady loves treats, travels well in a car, and is friendly toward everyone she meets. Her perfect home would probably be one with a fenced-in yard so she could romp, sniff, play and prance to her heart's content!\n\nCheck out Cora's video! Her foster mom says: this is how she tells us she wants to go out! She literally chats with us :) \n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram and twitter: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2017-10-16T23:05:04Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/1/?bust=1513893838&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/1/?bust=1513893838&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/1/?bust=1513893838&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/1/?bust=1513893838&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/1/?bust=1513893838&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/2/?bust=1513893841&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/2/?bust=1513893841&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/2/?bust=1513893841&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/2/?bust=1513893841&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/2/?bust=1513893841&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/3/?bust=1516899964&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/3/?bust=1516899964&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/3/?bust=1516899964&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/3/?bust=1516899964&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/3/?bust=1516899964&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/4/?bust=1516899964&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/4/?bust=1516899964&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/4/?bust=1516899964&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/4/?bust=1516899964&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/4/?bust=1516899964&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/5/?bust=1516899965&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/5/?bust=1516899965&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/5/?bust=1516899965&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/5/?bust=1516899965&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/5/?bust=1516899965&width=50&-t.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/6/?bust=1516899965&width=60&-pnt.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/6/?bust=1516899965&width=95&-fpm.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/6/?bust=1516899965&width=500&-x.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/6/?bust=1516899965&width=300&-pn.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40475711/6/?bust=1516899965&width=50&-t.jpg",
                                    "@id": "6"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "40475711"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Hound"
                        }
                    },
                    "name": {
                        "$t": "Teddy"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "If you think diamonds are a girl's best friend, then you never met a dog like Teddy!  He even has a splotchy, diamond-shaped patch plastered across his chest! Imagine that! \n\nThis 3-year old, 40-pound, chestnut-colored, handsome hunk of deliciousness is pretty much pure perfection and here are the reasons why: Aside from being the ideal age and size, Teddy is easy-going, quiet, housebroken, smart, well-behaved, dog-friendly, cuddly, leash-trained, a good traveler, and ridiculously sweet. Pretty dreamy, huh? Nothing ruffles this guy's feathers! Not.one.thing!\n\nTeddy enjoys walking by your side through the neighborhood or romping around outside playing for a while, but his exercise requirements are not overly excessive. At home, this furry mush-ball is happy hanging out and snuggling up to his person, his dog sibling, or both! When he wants you to pet him, he will gently nudge you with his cold little nose. What a cute, easy-peasy sweetie-pie!!! A natural-born soother, you won't need your Xanax with this dude around. Nope, it doesn't get much better than this!\n\nIf you would like to adopt this Rockstar, please email PupstarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!\n\n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2017-12-21T22:04:10Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Senior"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/1/?bust=1523618391&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/1/?bust=1523618391&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/1/?bust=1523618391&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/1/?bust=1523618391&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/1/?bust=1523618391&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/2/?bust=1523618392&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/2/?bust=1523618392&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/2/?bust=1523618392&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/2/?bust=1523618392&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/2/?bust=1523618392&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/3/?bust=1523618392&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/3/?bust=1523618392&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/3/?bust=1523618392&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/3/?bust=1523618392&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/3/?bust=1523618392&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/4/?bust=1525274568&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/4/?bust=1525274568&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/4/?bust=1525274568&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/4/?bust=1525274568&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/4/?bust=1525274568&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/5/?bust=1525274568&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/5/?bust=1525274568&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/5/?bust=1525274568&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/5/?bust=1525274568&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40783271/5/?bust=1525274568&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "40783271"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Dachshund"
                            },
                            {
                                "$t": "Terrier"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Coal"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "All puppies are cute and cuddly, right? We agree! But there's nothing...NOTHING...like the sweet soul of a senior dog! Coal, a 13-year old, 25-pound, Dachshund terrier mix is a lot like your favorite pair of old, broken-in shoes: Cozy, comfy and irreplaceable. A new pair would NEVER feel quite the same!\n\nCoal has been around the block so to speak, and guess what? He STILL loves to go around the block! Leash this fella up and he'll excitedly accompany you on a stroll through the 'hood, sniffing and greeting creatures along the way!\n\nAt home, he is content to sit with you on the couch (by invitation only!) or find a soft warm dog bed to plop down on. He is not separation anxiety-ridden, in-your-face kinda guy! Nice, huh? This easy-going cutie-pie has a healthy appetite, pretty much eats anything and is particularly fond of treats. Feed me, feed me, feed me! Oh, and guess what? He's also housebroken...yay!..and pad-trained too...double yay! He does not act his age and has energy! He knows simple commands such as sit and come. Coal will do best with a patient owner that understands he needs to build up trust. \n\nCoal does not hear as well as he did when he was a younger lad, but he navigates his world like a champ and only asks that you approach him gently so as not to startle him. He enjoys a tender touch, he hardly barks, sleeps through the night, can co-exist with other respectful dogs and isn't much of a shedder. \n\nCoal isn't some old, sooty, dirty, fossil fuel...nope, nope, nope! He's a sweet, floppy-eared, adorable, black-and-silver coated senior gentleman who deserves a low-key retirement home where he can hang his hat and enjoy some serious lovin'!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-01-26T23:37:11Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Senior"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/1/?bust=1523709959&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/1/?bust=1523709959&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/1/?bust=1523709959&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/1/?bust=1523709959&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/1/?bust=1523709959&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/2/?bust=1523709959&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/2/?bust=1523709959&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/2/?bust=1523709959&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/2/?bust=1523709959&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/2/?bust=1523709959&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/3/?bust=1520902306&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/3/?bust=1520902306&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/3/?bust=1520902306&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/3/?bust=1520902306&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/3/?bust=1520902306&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/4/?bust=1520902307&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/4/?bust=1520902307&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/4/?bust=1520902307&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/4/?bust=1520902307&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/4/?bust=1520902307&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/5/?bust=1523710023&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/5/?bust=1523710023&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/5/?bust=1523710023&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/5/?bust=1523710023&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/40998055/5/?bust=1523710023&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "40998055"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Boxer"
                        }
                    },
                    "name": {
                        "$t": "Casey"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Like fine wine, some things get even better with age! Such is the case with Casey, a calm, quiet, charming 12-year-old, 55-pound Boxer mix, who is sweetness, love and joy, all rolled up into one fabulous package of fur!\n\nCasey is housebroken and loves being outside sniffing at all the interesting smells. Regardless of the weather conditions, she is always up for a slow meandering stroll, and sheâ\u0080\u0099s so gentle and polite, that even a young child could walk this angel. She gets along well with all dogs, regardless of their size or age. Same thing with people. Anything goes! Casey is as easy-going as they come. \n\nThis gorgeous gal is a total love sponge and will give back even more than she receives. She is especially fond of human hugs and having her head scratched!  Her only request would be to live in a home without tons of steps. \n\nIf you would like to adopt this Rockstar, please email PupstarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!\n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-02-20T16:34:47Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/1/?bust=1521161387&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/1/?bust=1521161387&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/1/?bust=1521161387&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/1/?bust=1521161387&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/1/?bust=1521161387&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/2/?bust=1521161389&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/2/?bust=1521161389&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/2/?bust=1521161389&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/2/?bust=1521161389&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/2/?bust=1521161389&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/3/?bust=1521161391&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/3/?bust=1521161391&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/3/?bust=1521161391&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/3/?bust=1521161391&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/3/?bust=1521161391&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/4/?bust=1521161391&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/4/?bust=1521161391&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/4/?bust=1521161391&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/4/?bust=1521161391&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/4/?bust=1521161391&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/5/?bust=1521941665&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/5/?bust=1521941665&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/5/?bust=1521941665&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/5/?bust=1521941665&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/5/?bust=1521941665&width=50&-t.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/6/?bust=1521941666&width=60&-pnt.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/6/?bust=1521941666&width=95&-fpm.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/6/?bust=1521941666&width=500&-x.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/6/?bust=1521941666&width=300&-pn.jpg",
                                    "@id": "6"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41189020/6/?bust=1521941666&width=50&-t.jpg",
                                    "@id": "6"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41189020"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Pit Bull Terrier"
                        }
                    },
                    "name": {
                        "$t": "Kennedy"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Are you in the market for a cream-colored, mushy, magnificent, medium-sized meatball? Then check out Kennedy, a 35-pound, 2-year old Pitbull Terrier mix who is lovely, light, lean, and lucious!\n\nThis maniacally happy lump-of-love is extremely affectionate, while also sporting a calm, relaxed, easy-going nature. Playful with other dogs and friendly to all humans (both big and small), this gal has some amazing traits: Housebroken, brilliant (understands sit, lie down, stay, come), non-barky, gentle, spirited and fun-loving. And she gives the wettest, sweetest, best-est kisses everrrr! What we can say? Kennedy is truly the quintessential family dog. \n\nLike any young lady looking to stay slender and keep healthy, Kennedy loves going for walks, romping around outdoors, and burning off some of the calories from those jerky treats she loves. Once sheâ\u0080\u0099s pooped out, she enjoys snuggling up with her person or passing out on a comfy dog bed. Peace out, hooomans! \n\nKennedy is a kind, cute, cool, compact, well-balanced babe searching for theeee most important thing in life: L-O-V-E! \n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-03-16T00:50:08Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/1/?bust=1523988295&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/1/?bust=1523988295&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/1/?bust=1523988295&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/1/?bust=1523988295&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/1/?bust=1523988295&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/2/?bust=1523988295&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/2/?bust=1523988295&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/2/?bust=1523988295&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/2/?bust=1523988295&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/2/?bust=1523988295&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/3/?bust=1523988296&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/3/?bust=1523988296&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/3/?bust=1523988296&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/3/?bust=1523988296&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/3/?bust=1523988296&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/4/?bust=1523988296&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/4/?bust=1523988296&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/4/?bust=1523988296&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/4/?bust=1523988296&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/4/?bust=1523988296&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/5/?bust=1523988296&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/5/?bust=1523988296&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/5/?bust=1523988296&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/5/?bust=1523988296&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41251644/5/?bust=1523988296&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41251644"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Chihuahua"
                        }
                    },
                    "name": {
                        "$t": "Mickey"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Hot diggety dog, check out THIS precious peanut! His name is Mickey and heâ\u0080\u0099s a sweet, mellow 9-year-old, 7-pound, housebroken Chihuahua. \n\nMickey is as light as a feather and walks well on a leash, but prefers a short-n-sweet stroll. I peed, I pooped, now pick me up, pleeez! He is the absolute perfect travel buddy and enjoys being toted around in a snazzy carry-bag or better yet, in the snuggly arms of a human. \n\nThis affectionate little fella is a master cuddler and loves being pet. He will try to make his way under the blankets and adorably cozy right up to you. Free heat, yay!\n\nMickey knows a few commands and is very respectful around food. He might even turn around in a circle, if you ask him nicely! He respects the boundaries of other dogs (their space, their treats, their toys) and can peacefully coexist with them. Heâ\u0080\u0099d probably be fine with the felines too!\n\nMickey can be somewhat wary of strangers, but give him a few minutes to warm up, and heâ\u0080\u0099s willing to be anyoneâ\u0080\u0099s best buddy! Hint: Gently offer him a belly rub and he will just melt in your arms! Yep, thatâ\u0080\u0099s right, this deserving, tender, little man is a total mush-ball who is looking to find that special someone with whom to share a lifetime of love, sweetness and joy. \n\nIf you would like to adopt this Rockstar, please email PupstarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-03-24T16:25:36Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/1/?bust=1526610629&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/1/?bust=1526610629&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/1/?bust=1526610629&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/1/?bust=1526610629&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/1/?bust=1526610629&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/2/?bust=1526610631&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/2/?bust=1526610631&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/2/?bust=1526610631&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/2/?bust=1526610631&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/2/?bust=1526610631&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/3/?bust=1526610633&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/3/?bust=1526610633&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/3/?bust=1526610633&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/3/?bust=1526610633&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/3/?bust=1526610633&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/4/?bust=1526610634&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/4/?bust=1526610634&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/4/?bust=1526610634&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/4/?bust=1526610634&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/4/?bust=1526610634&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/5/?bust=1526610638&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/5/?bust=1526610638&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/5/?bust=1526610638&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/5/?bust=1526610638&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41660567/5/?bust=1526610638&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41660567"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Bullmastiff"
                            },
                            {
                                "$t": "Terrier"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Kensie"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Kensie is 47 pounds, and 9 years old. She is an incredible dog. She is very friendly, loves to be around other dogs, and cuddle with her human. More info to come!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-18T02:30:43Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/1/?bust=1525520959&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/1/?bust=1525520959&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/1/?bust=1525520959&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/1/?bust=1525520959&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/1/?bust=1525520959&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/3/?bust=1525520960&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/3/?bust=1525520960&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/3/?bust=1525520960&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/3/?bust=1525520960&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/3/?bust=1525520960&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/4/?bust=1525520960&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/4/?bust=1525520960&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/4/?bust=1525520960&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/4/?bust=1525520960&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/4/?bust=1525520960&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/5/?bust=1525520961&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/5/?bust=1525520961&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/5/?bust=1525520961&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/5/?bust=1525520961&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/5/?bust=1525520961&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/6/?bust=1525520961&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/6/?bust=1525520961&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/6/?bust=1525520961&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/6/?bust=1525520961&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41405505/6/?bust=1525520961&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41405505"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Hound"
                            },
                            {
                                "$t": "Labrador Retriever"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Tidy"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Give a warm welcome to Tidy from Tennessee, a 5-month old, 25-pound (as of 4/30) hound mix who recently made her way to The Big Apple. This black beauty is an absolute love bug and has been melting hearts everywhere she goes. \n\nA major cuddler and a huge fan of belly rubs, Tidy is very much into human companionship. She is affectionate, dog-friendly, nearly 100% housebroken, pad-trained, crate-trained, well-mannered, and simply lovely to have around. \n\nTidy has bursts of puppy energy, but is overall a mellow sort of girl. After a bit of playtime, she is happy to veg out and watch TV with you or settle down for a nice long nap. She loves treats and will sit for them, when asked to do so. \n\nLoving and kind to all creatures - - both human and animal - - this gorgeous gal would make the absolute ideal family pet. Not a lover of the hustle-bustle of city life, Tidy would do best in a suburban setting with a grassy yard to romp around in and call her own. Fetch anyone?\n\nIf you would like to adopt this Rockstar, please email PupstarzRescue@gmail.com or visit www.pupstarzrescue.org for an application."
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-04-14T14:14:09Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/1/?bust=1526972524&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/1/?bust=1526972524&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/1/?bust=1526972524&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/1/?bust=1526972524&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/1/?bust=1526972524&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/2/?bust=1526972525&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/2/?bust=1526972525&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/2/?bust=1526972525&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/2/?bust=1526972525&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/2/?bust=1526972525&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/3/?bust=1526972526&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/3/?bust=1526972526&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/3/?bust=1526972526&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/3/?bust=1526972526&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/3/?bust=1526972526&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/4/?bust=1526221855&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/4/?bust=1526221855&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/4/?bust=1526221855&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/4/?bust=1526221855&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/4/?bust=1526221855&width=50&-t.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/5/?bust=1526972526&width=60&-pnt.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/5/?bust=1526972526&width=95&-fpm.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/5/?bust=1526972526&width=500&-x.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/5/?bust=1526972526&width=300&-pn.jpg",
                                    "@id": "5"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41559739/5/?bust=1526972526&width=50&-t.jpg",
                                    "@id": "5"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41559739"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Plott Hound"
                            },
                            {
                                "$t": "Terrier"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Goodness"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Goodness gracious, if those brown eyes wonâ\u0080\u0099t melt your heart, nothing will! Aptly named, Goodness is...well, pretty much ALL goodness. Sheâ\u0080\u0099s a 1-year-old, 48-pound Plott Hound/Terrier mix who 100% house-trained, dog-friendly, people-friendly, a great traveler, and just FULL of the joys of life!\n\nGoodness looks for fun wherever she can find it! Playful and energetic, this gorgeous girly likes activity and loves exercising. Yet she can also tone it down and happily chill out in front of the TV. The best of both worlds! Loud noises do not startle her, she sleeps like a log through the night, and she always tries hard to please her people. A seeker of affection and a lover of belly rubs, she yearns to be touched and handled by humans. If youâ\u0080\u0099ve got the time, sheâ\u0080\u0099s got the fur!\n\nSmart and responsive, Goodnessâ\u0080\u0099 leash skills are quickly improving and she is working on mastering more commands. With a tail that doesnâ\u0080\u0099t stop wagging, a stunningly beautiful face, and a lively, warm, captivating personality, Goodness really has it all!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-05T13:18:10Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/1/?bust=1527033555&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/1/?bust=1527033555&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/1/?bust=1527033555&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/1/?bust=1527033555&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/1/?bust=1527033555&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/2/?bust=1527033557&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/2/?bust=1527033557&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/2/?bust=1527033557&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/2/?bust=1527033557&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698359/2/?bust=1527033557&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698359"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Collie"
                            },
                            {
                                "$t": "Labrador Retriever"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Walnut"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Walnut is a 12 week, 24 pound (as of 5/22) Collie/Labrador mix who is dog, kid, and cat friendly! More info to come.\n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:59:28Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/1/?bust=1527030032&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/1/?bust=1527030032&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/1/?bust=1527030032&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/1/?bust=1527030032&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/1/?bust=1527030032&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/2/?bust=1527030034&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/2/?bust=1527030034&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/2/?bust=1527030034&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/2/?bust=1527030034&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/2/?bust=1527030034&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/3/?bust=1527030036&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/3/?bust=1527030036&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/3/?bust=1527030036&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/3/?bust=1527030036&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698163/3/?bust=1527030036&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698163"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Border Collie"
                        }
                    },
                    "name": {
                        "$t": "Tapioca"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Tapioca is a 10 month, 43 pound Border Collie mix who is dog friendly! More info to come.\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:00:44Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": {
                            "$t": "altered"
                        }
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Senior"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/1/?bust=1527030195&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/1/?bust=1527030195&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/1/?bust=1527030195&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/1/?bust=1527030195&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/1/?bust=1527030195&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/2/?bust=1527030197&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/2/?bust=1527030197&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/2/?bust=1527030197&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/2/?bust=1527030197&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698175/2/?bust=1527030197&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698175"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Yorkshire Terrier Yorkie"
                        }
                    },
                    "name": {
                        "$t": "Radish"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Radish is a 10 year old, 7 pound Yorkie mix who is dog friendly! More info to come.\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:03:35Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/1/?bust=1527032116&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/1/?bust=1527032116&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/1/?bust=1527032116&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/1/?bust=1527032116&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/1/?bust=1527032116&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/2/?bust=1527032118&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/2/?bust=1527032118&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/2/?bust=1527032118&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/2/?bust=1527032118&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698278/2/?bust=1527032118&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698278"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rottweiler"
                        }
                    },
                    "name": {
                        "$t": "Tahini"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Tahini is a 7 week, 4.5 pound (as of 5/22) Rottweiler mix who is dog, kid, and cat friendly! More info to come.\n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:35:30Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/1/?bust=1527031143&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/1/?bust=1527031143&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/1/?bust=1527031143&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/1/?bust=1527031143&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/1/?bust=1527031143&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/2/?bust=1527031147&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/2/?bust=1527031147&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/2/?bust=1527031147&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/2/?bust=1527031147&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698213/2/?bust=1527031147&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698213"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Poodle"
                            },
                            {
                                "$t": "Schnauzer"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Shelby"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Shelby is a 2 year old, 20 pound Poodle/Schnauzer mix who is dog friendly! More info to come.\n\n**We cannot guarantee the breed of a dog.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:20:06Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/1/?bust=1527030679&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/1/?bust=1527030679&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/1/?bust=1527030679&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/1/?bust=1527030679&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/1/?bust=1527030679&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/2/?bust=1527030681&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/2/?bust=1527030681&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/2/?bust=1527030681&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/2/?bust=1527030681&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698194/2/?bust=1527030681&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698194"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Beagle"
                            },
                            {
                                "$t": "Collie"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Nectarine"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Nectarine is an 8 week, 8 pound (as of 5/22) Beagle/Collie who is dog friendly! More info to come.\n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:11:29Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/1/?bust=1527031693&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/1/?bust=1527031693&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/1/?bust=1527031693&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/1/?bust=1527031693&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/1/?bust=1527031693&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/2/?bust=1527031695&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/2/?bust=1527031695&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/2/?bust=1527031695&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/2/?bust=1527031695&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698257/2/?bust=1527031695&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698257"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rottweiler"
                        }
                    },
                    "name": {
                        "$t": "Tabasco"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Tabasco is a 7 week, 4.6 pound (as of 5/22) Rottweiler mix who is dog, kid, and cat friendly! More info to come.\n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:28:27Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/1/?bust=1527031879&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/1/?bust=1527031879&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/1/?bust=1527031879&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/1/?bust=1527031879&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/1/?bust=1527031879&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/2/?bust=1527031882&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/2/?bust=1527031882&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/2/?bust=1527031882&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/2/?bust=1527031882&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698274/2/?bust=1527031882&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698274"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rottweiler"
                        }
                    },
                    "name": {
                        "$t": "Tamarillo"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Tamarillo is a 7 week, 5.4 pound (as of 5/22) Rottweiler mix who is dog, kid, and cat friendly! More info to come.\n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:31:31Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/1/?bust=1527030791&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/1/?bust=1527030791&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/1/?bust=1527030791&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/1/?bust=1527030791&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/1/?bust=1527030791&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/2/?bust=1527030793&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/2/?bust=1527030793&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/2/?bust=1527030793&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/2/?bust=1527030793&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/2/?bust=1527030793&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/3/?bust=1527030794&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/3/?bust=1527030794&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/3/?bust=1527030794&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/3/?bust=1527030794&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698200/3/?bust=1527030794&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698200"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Collie"
                            },
                            {
                                "$t": "Beagle"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Noodle"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Noodle is an 8 week, 7 pound (as of 5/22) Collie/Beagle who is dog friendly! More info to come.\n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:13:23Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/1/?bust=1527033092&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/1/?bust=1527033092&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/1/?bust=1527033092&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/1/?bust=1527033092&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/1/?bust=1527033092&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/2/?bust=1527033094&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/2/?bust=1527033094&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/2/?bust=1527033094&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/2/?bust=1527033094&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698337/2/?bust=1527033094&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698337"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rottweiler"
                        }
                    },
                    "name": {
                        "$t": "Turnip"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Turnip  is a 7 week, 6.3 pound (as of 5/22) Rottweiler mix who is dog, kid, and cat friendly! More info to come.\n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:51:44Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/1/?bust=1527034263&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/1/?bust=1527034263&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/1/?bust=1527034263&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/1/?bust=1527034263&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/1/?bust=1527034263&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/2/?bust=1527034266&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/2/?bust=1527034266&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/2/?bust=1527034266&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/2/?bust=1527034266&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698391/2/?bust=1527034266&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698391"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Hound"
                            },
                            {
                                "$t": "Shepherd"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Dorito"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Dorito is a 1 year old, 43 pound Hound/Shepherd mix who gets along great with other dogs. More info to come!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-23T00:11:33Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Young"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/1/?bust=1527034466&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/1/?bust=1527034466&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/1/?bust=1527034466&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/1/?bust=1527034466&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/1/?bust=1527034466&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/2/?bust=1527034468&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/2/?bust=1527034468&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/2/?bust=1527034468&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/2/?bust=1527034468&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698397/2/?bust=1527034468&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698397"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Shepherd"
                            },
                            {
                                "$t": "Labrador Retriever"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Tangerine"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Tangerine is a 1 year old, 58 pound Shepherd/Labrador mix who gets along great with other dogs. More info to come!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-23T00:15:02Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/1/?bust=1527071366&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/1/?bust=1527071366&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/1/?bust=1527071366&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/1/?bust=1527071366&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/1/?bust=1527071366&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/2/?bust=1527071368&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/2/?bust=1527071368&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/2/?bust=1527071368&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/2/?bust=1527071368&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702884/2/?bust=1527071368&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41702884"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Australian Cattle Dog / Blue Heeler"
                            },
                            {
                                "$t": "Beagle"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Giblet"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Giblet is a 7 week, 4.3 pound Heeler/Beagle mix who is great with other dogs, cats, and kids! \n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-23T10:29:39Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/1/?bust=1527071213&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/1/?bust=1527071213&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/1/?bust=1527071213&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/1/?bust=1527071213&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/1/?bust=1527071213&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/2/?bust=1527071215&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/2/?bust=1527071215&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/2/?bust=1527071215&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/2/?bust=1527071215&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702883/2/?bust=1527071215&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41702883"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Australian Cattle Dog / Blue Heeler"
                            },
                            {
                                "$t": "Beagle"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Goji"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Goji is a 7 week, 2.6 (as of 5/22) pound Heeler/Beagle mix who is great with other dogs, cats, and kids! \n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-23T10:27:22Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/1/?bust=1527072050&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/1/?bust=1527072050&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/1/?bust=1527072050&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/1/?bust=1527072050&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/1/?bust=1527072050&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/2/?bust=1527072052&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/2/?bust=1527072052&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/2/?bust=1527072052&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/2/?bust=1527072052&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702887/2/?bust=1527072052&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41702887"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Australian Cattle Dog / Blue Heeler"
                            },
                            {
                                "$t": "Beagle"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Gooseberry"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Gooseberry is a 7 week, 2.1 (as of 5/22) pound Heeler/Beagle mix who is great with other dogs, cats, and kids! \n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-23T10:41:07Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/1/?bust=1527070601&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/1/?bust=1527070601&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/1/?bust=1527070601&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/1/?bust=1527070601&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/1/?bust=1527070601&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/2/?bust=1527070603&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/2/?bust=1527070603&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/2/?bust=1527070603&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/2/?bust=1527070603&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702878/2/?bust=1527070603&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41702878"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Terrier"
                        }
                    },
                    "name": {
                        "$t": "Berry *FOSTER NEEDED*"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Berry is an 8 year, 12.6 pound terrier mix. She's great with dogs! She is coming to NYC on June 16th and needs a foster home or an adopter! If approved, fosters have first priority for adoption. Fostering is a great way to make sure the pup fits in with your lifestyle!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-23T10:17:25Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/1/?bust=1527070411&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/1/?bust=1527070411&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/1/?bust=1527070411&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/1/?bust=1527070411&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/1/?bust=1527070411&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/2/?bust=1527070432&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/2/?bust=1527070432&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/2/?bust=1527070432&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/2/?bust=1527070432&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698400/2/?bust=1527070432&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698400"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Husky"
                        }
                    },
                    "name": {
                        "$t": "Mango"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Mango is a 10 week old, 8.7 pound (as of 5/22) Husky mix who gets along well with dogs and kids!\n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-23T10:14:04Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/1/?bust=1527071850&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/1/?bust=1527071850&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/1/?bust=1527071850&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/1/?bust=1527071850&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/1/?bust=1527071850&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/2/?bust=1527071853&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/2/?bust=1527071853&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/2/?bust=1527071853&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/2/?bust=1527071853&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41702886/2/?bust=1527071853&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41702886"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Beagle"
                            },
                            {
                                "$t": "Australian Cattle Dog / Blue Heeler"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Gazpacho"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Gazpacho is a 7 week, 4.2 (as of 5/22) pound Heeler/Beagle mix who is great with other dogs, cats, and kids! \n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-23T10:37:50Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/1/?bust=1527460480&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/1/?bust=1527460480&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/1/?bust=1527460480&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/1/?bust=1527460480&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/1/?bust=1527460480&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/2/?bust=1527460482&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/2/?bust=1527460482&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/2/?bust=1527460482&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/2/?bust=1527460482&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/2/?bust=1527460482&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/3/?bust=1527460483&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/3/?bust=1527460483&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/3/?bust=1527460483&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/3/?bust=1527460483&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741678/3/?bust=1527460483&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41741678"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Hound"
                        }
                    },
                    "name": {
                        "$t": "Olive"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Olive is a 2 year old, 35 pound Hound mix that is dog friendly! \n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-27T22:35:14Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/1/?bust=1527443479&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/1/?bust=1527443479&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/1/?bust=1527443479&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/1/?bust=1527443479&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/1/?bust=1527443479&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/2/?bust=1527443481&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/2/?bust=1527443481&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/2/?bust=1527443481&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/2/?bust=1527443481&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740995/2/?bust=1527443481&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41740995"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rat Terrier"
                        }
                    },
                    "name": {
                        "$t": "Ricotta"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Ricotta is an 8 week, 1.14 pound (as of 5/26) Rat Terrier mix who is dog, cat, and kid friendly! \n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-27T17:51:40Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/1/?bust=1527443269&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/1/?bust=1527443269&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/1/?bust=1527443269&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/1/?bust=1527443269&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/1/?bust=1527443269&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/2/?bust=1527443271&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/2/?bust=1527443271&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/2/?bust=1527443271&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/2/?bust=1527443271&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41740984/2/?bust=1527443271&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41740984"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rat Terrier"
                        }
                    },
                    "name": {
                        "$t": "Radicchio"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Radicchio is an 8 week, 1.10 pound (as of 5/26) Rat Terrier mix who is dog, cat, and kid friendly! \n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-27T17:49:50Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/1/?bust=1527444454&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/1/?bust=1527444454&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/1/?bust=1527444454&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/1/?bust=1527444454&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/1/?bust=1527444454&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/2/?bust=1527444457&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/2/?bust=1527444457&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/2/?bust=1527444457&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/2/?bust=1527444457&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741033/2/?bust=1527444457&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41741033"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rat Terrier"
                        }
                    },
                    "name": {
                        "$t": "Ruffles"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Ruffles is an 8 week, 2.4 pound (as of 5/26) Rat Terrier mix who is dog, cat, and kid friendly! \n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-27T18:07:57Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Senior"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/1/?bust=1527030378&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/1/?bust=1527030378&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/1/?bust=1527030378&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/1/?bust=1527030378&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/1/?bust=1527030378&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/2/?bust=1527030380&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/2/?bust=1527030380&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/2/?bust=1527030380&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/2/?bust=1527030380&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/2/?bust=1527030380&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/3/?bust=1527030383&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/3/?bust=1527030383&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/3/?bust=1527030383&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/3/?bust=1527030383&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41698178/3/?bust=1527030383&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41698178"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Dachshund"
                        }
                    },
                    "name": {
                        "$t": "Cayenne"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Cayenne is a 10 year old, 18.5 pound Dachshund who is dog friendly! More info to come.\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-22T23:06:34Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/1/?bust=1527443827&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/1/?bust=1527443827&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/1/?bust=1527443827&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/1/?bust=1527443827&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/1/?bust=1527443827&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/2/?bust=1527443829&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/2/?bust=1527443829&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/2/?bust=1527443829&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/2/?bust=1527443829&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741014/2/?bust=1527443829&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41741014"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rat Terrier"
                        }
                    },
                    "name": {
                        "$t": "Raspberry"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Raspberry is an 8 week, 1.14 pound (as of 5/26) Rat Terrier mix who is dog, cat, and kid friendly! \n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-27T17:57:20Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/1/?bust=1527525757&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/1/?bust=1527525757&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/1/?bust=1527525757&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/1/?bust=1527525757&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/1/?bust=1527525757&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/2/?bust=1527525761&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/2/?bust=1527525761&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/2/?bust=1527525761&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/2/?bust=1527525761&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746240/2/?bust=1527525761&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41746240"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Shih Tzu"
                        }
                    },
                    "name": {
                        "$t": "Cornbread"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Cornbread is a 20 pound, 3 year old Shih Tzu mix that is dog friendly! She is coming to NYC on June 2nd and needs a foster home or an adopter! If approved, fosters have first priority for adoption. Fostering is a great way to make sure the pup fits in with your lifestyle!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-28T16:42:57Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Senior"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/1/?bust=1527526027&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/1/?bust=1527526027&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/1/?bust=1527526027&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/1/?bust=1527526027&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/1/?bust=1527526027&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/2/?bust=1527526030&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/2/?bust=1527526030&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/2/?bust=1527526030&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/2/?bust=1527526030&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746250/2/?bust=1527526030&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41746250"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": [
                            {
                                "$t": "Chihuahua"
                            },
                            {
                                "$t": "Jack Russell Terrier"
                            }
                        ]
                    },
                    "name": {
                        "$t": "Chewy"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Chewy is a 16 pound, 12 year old Chihuahua/Jack Russell Terrier mix that is dog friendly!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-28T16:47:19Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/1/?bust=1527461014&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/1/?bust=1527461014&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/1/?bust=1527461014&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/1/?bust=1527461014&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/1/?bust=1527461014&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/2/?bust=1527461016&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/2/?bust=1527461016&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/2/?bust=1527461016&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/2/?bust=1527461016&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741700/2/?bust=1527461016&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41741700"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Labrador Retriever"
                        }
                    },
                    "name": {
                        "$t": "Danish"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Danish is a 3 year old, 43 pound Labrador mix who is dog friendly! \n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-27T22:44:05Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/1/?bust=1527442853&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/1/?bust=1527442853&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/1/?bust=1527442853&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/1/?bust=1527442853&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/1/?bust=1527442853&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/2/?bust=1527442859&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/2/?bust=1527442859&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/2/?bust=1527442859&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/2/?bust=1527442859&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/2/?bust=1527442859&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/3/?bust=1527442859&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/3/?bust=1527442859&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/3/?bust=1527442859&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/3/?bust=1527442859&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41733294/3/?bust=1527442859&width=50&-t.jpg",
                                    "@id": "3"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41733294"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Terrier"
                        }
                    },
                    "name": {
                        "$t": "Zucchini"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Zucchini is a 2 year old, 9 pound terrier mix! Sheâ\u0080\u0099s dog friendly! \n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-26T15:44:44Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/1/?bust=1527443971&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/1/?bust=1527443971&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/1/?bust=1527443971&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/1/?bust=1527443971&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/1/?bust=1527443971&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/2/?bust=1527443974&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/2/?bust=1527443974&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/2/?bust=1527443974&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/2/?bust=1527443974&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741020/2/?bust=1527443974&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41741020"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Rat Terrier"
                        }
                    },
                    "name": {
                        "$t": "Rosemary"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Rosemary is an 8 week, 1.14 pound (as of 5/26) Rat Terrier mix who is dog, cat, and kid friendly! \n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-27T18:00:57Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/1/?bust=1527457954&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/1/?bust=1527457954&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/1/?bust=1527457954&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/1/?bust=1527457954&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/1/?bust=1527457954&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/2/?bust=1527457957&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/2/?bust=1527457957&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/2/?bust=1527457957&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/2/?bust=1527457957&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41741623/2/?bust=1527457957&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41741623"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Brittany Spaniel"
                        }
                    },
                    "name": {
                        "$t": "Calamari"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Calamari is a 4 year old, 22 pound Brittany Spaniel mix! She is great with other dogs. \n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-27T21:53:25Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/1/?bust=1527530244&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/1/?bust=1527530244&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/1/?bust=1527530244&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/1/?bust=1527530244&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/1/?bust=1527530244&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/2/?bust=1527530246&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/2/?bust=1527530246&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/2/?bust=1527530246&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/2/?bust=1527530246&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746456/2/?bust=1527530246&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41746456"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Treeing Walker Coonhound"
                        }
                    },
                    "name": {
                        "$t": "Alvin"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Alvin is a 3 year old, 50 pound Walker mix. He gets along great with other dogs!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-28T17:57:34Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/1/?bust=1527530421&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/1/?bust=1527530421&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/1/?bust=1527530421&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/1/?bust=1527530421&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/1/?bust=1527530421&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/2/?bust=1527530423&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/2/?bust=1527530423&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/2/?bust=1527530423&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/2/?bust=1527530423&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746461/2/?bust=1527530423&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41746461"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Pit Bull Terrier"
                        }
                    },
                    "name": {
                        "$t": "Baby"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Baby is a 12 week, 18 pound (as of 5/28) Pitbull mix. She gets along great with other dogs and children!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-28T18:00:35Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "M"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/1/?bust=1527534353&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/1/?bust=1527534353&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/1/?bust=1527534353&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/1/?bust=1527534353&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/1/?bust=1527534353&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/2/?bust=1527534355&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/2/?bust=1527534355&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/2/?bust=1527534355&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/2/?bust=1527534355&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746643/2/?bust=1527534355&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41746643"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Standard Poodle"
                        }
                    },
                    "name": {
                        "$t": "Kiwi *FOSTER NEEDED*"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Kiwi is a 40 pound, 3 year old Standard Poodle, believed to be Purebred.  She is great with dogs! She is coming to NYC on June 2nd and needs a foster home or an adopter! If approved, fosters have first priority for adoption. Fostering is a great way to make sure the pup fits in with your lifestyle!\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "no"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-28T19:06:04Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Baby"
                    },
                    "size": {
                        "$t": "S"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/1/?bust=1527595087&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/1/?bust=1527595087&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/1/?bust=1527595087&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/1/?bust=1527595087&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/1/?bust=1527595087&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/2/?bust=1527595089&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/2/?bust=1527595089&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/2/?bust=1527595089&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/2/?bust=1527595089&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41746653/2/?bust=1527595089&width=50&-t.jpg",
                                    "@id": "2"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41746653"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Chihuahua"
                        }
                    },
                    "name": {
                        "$t": "Gelato *FOSTER NEEDED*"
                    },
                    "sex": {
                        "$t": "M"
                    },
                    "description": {
                        "$t": "Gelato is a 4 pound, 8 week (as of 5/28) Chihuahua mix who is dog and child friendly! He is coming to NYC on June 2nd and needs a foster home or an adopter! If approved, fosters have first priority for adoption. Fostering is a great way to make sure the pup fits in with your lifestyle!\n\n**Puppies are hard work. If you are not ready for a 'new baby' please adopt an adult or senior who need you!  In addition, we cannot guarantee the breed, size, and age of a puppy.**\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-29T11:58:31Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                },
                {
                    "options": {
                        "option": [
                            {
                                "$t": "altered"
                            },
                            {
                                "$t": "hasShots"
                            },
                            {
                                "$t": "housetrained"
                            }
                        ]
                    },
                    "status": {
                        "$t": "A"
                    },
                    "contact": {
                        "phone": {},
                        "state": {
                            "$t": "NY"
                        },
                        "address2": {},
                        "email": {
                            "$t": "pupstarzrescue@gmail.com"
                        },
                        "city": {
                            "$t": "New York"
                        },
                        "zip": {
                            "$t": "10010"
                        },
                        "fax": {},
                        "address1": {}
                    },
                    "age": {
                        "$t": "Adult"
                    },
                    "size": {
                        "$t": "L"
                    },
                    "media": {
                        "photos": {
                            "photo": [
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/1/?bust=1527710312&width=60&-pnt.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/1/?bust=1527710312&width=95&-fpm.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/1/?bust=1527710312&width=500&-x.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/1/?bust=1527710312&width=300&-pn.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/1/?bust=1527710312&width=50&-t.jpg",
                                    "@id": "1"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/2/?bust=1527710314&width=60&-pnt.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/2/?bust=1527710314&width=95&-fpm.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/2/?bust=1527710314&width=500&-x.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/2/?bust=1527710314&width=300&-pn.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/2/?bust=1527710314&width=50&-t.jpg",
                                    "@id": "2"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/3/?bust=1527710316&width=60&-pnt.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/3/?bust=1527710316&width=95&-fpm.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/3/?bust=1527710316&width=500&-x.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/3/?bust=1527710316&width=300&-pn.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/3/?bust=1527710316&width=50&-t.jpg",
                                    "@id": "3"
                                },
                                {
                                    "@size": "pnt",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/4/?bust=1527710321&width=60&-pnt.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "fpm",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/4/?bust=1527710321&width=95&-fpm.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "x",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/4/?bust=1527710321&width=500&-x.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "pn",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/4/?bust=1527710321&width=300&-pn.jpg",
                                    "@id": "4"
                                },
                                {
                                    "@size": "t",
                                    "$t": "http://photos.petfinder.com/photos/pets/41763406/4/?bust=1527710321&width=50&-t.jpg",
                                    "@id": "4"
                                }
                            ]
                        }
                    },
                    "id": {
                        "$t": "41763406"
                    },
                    "shelterPetId": {},
                    "breeds": {
                        "breed": {
                            "$t": "Bluetick Coonhound"
                        }
                    },
                    "name": {
                        "$t": "Cookie"
                    },
                    "sex": {
                        "$t": "F"
                    },
                    "description": {
                        "$t": "Cookie is a 2 year old, 68 pound Bluetick Coonhound. She is incredibly sweet and loves attention! She gets along great with other dogs and children.\n\nIf you would like to adopt this Rockstar, please email PupStarzRescue@gmail.com or visit www.pupstarzrescue.org for an application!  \n\nwww.pupstarzrescue.org \nPlease Follow us on Instagram: @pupstarzrescue\nLike us on FaceBook! www.facebook.com/PupStarzRescue\n\n*PupStarz Rescue cannot guarantee the breed of the dog"
                    },
                    "mix": {
                        "$t": "yes"
                    },
                    "shelterId": {
                        "$t": "NY1270"
                    },
                    "lastUpdate": {
                        "$t": "2018-05-30T19:59:02Z"
                    },
                    "animal": {
                        "$t": "Dog"
                    }
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <header>

                </header>
                <div id='adoptable_list'>
                    <ul>
                        {this.state.found.map(()=>{
                            <li><li>
                        })}
                    </ul>
                </div>
                <footer>

                </footer>
            </div>
        )
    }
}

export default AdoptableList;

