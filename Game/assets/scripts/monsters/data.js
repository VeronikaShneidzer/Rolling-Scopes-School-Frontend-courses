const adjectives = [
"Aback", "Abaft", "Abandoned", "Abashed", "Aberrant", "Abhorrent", "Abiding", "Abject", "Ablaze", "Able", 
"Abnormal", "Aboard", "Aboriginal", "Abortive", "Abounding", "Abrasive", "Abrupt", "Absent", "Absorbed", 
"Absorbing", "Abstracted", "Absurd", "Abundant", "Abusive", "Acceptable", "Accessible", "Accidental", "Accurate", 
"Acid", "Acidic", "Acoustic", "Acrid", "Actually", "Ad", "Hoc", "Adamant", "Adaptable", "Addicted", "Adhesive", 
"Adjoining", "Adorable", "Adventurous", "Afraid", "Aggressive", "Agonizing", "Agreeable", "Ahead", "Ajar", "Alcoholic", 
"Alert", "Alike", "Alive", "Alleged", "Alluring", "Aloof", "Amazing", "Ambiguous", "Ambitious", "Amuck", "Amused", 
"Amusing", "Ancient", "Angry", "Animated", "Annoyed", "Annoying", "Anxious", "Apathetic", "Aquatic", "Aromatic", 
"Arrogant", "Ashamed", "Aspiring", "Assorted", "Astonishing", "Attractive", "Auspicious", "Automatic", "Available", 
"Average", "Awake", "Aware", "Awesome", "Awful", "Axiomatic", "Bad", "Barbarous", "Bashful", "Bawdy", "Beautiful", 
"Befitting", "Belligerent", "Beneficial", "Bent", "Berserk", "Best", "Better", "Bewildered", "Big", "Billowy", 
"Bite-sized", "Bitter", "Bizarre", "Black", "Black-and-white", "Bloody", "Blue", "Blue-eyed", "Blushing", "Boiling", 
"Boorish", "Bored", "Boring", "Bouncy", "Boundless", "Brainy", "Brash", "Brave", "Brawny", "Breakable", "Breezy", 
"Brief", "Bright", "Bright", "Broad", "Broken", "Brown", "Bumpy", "Burly", "Bustling", "Busy", "Cagey", "Calculating", 
"Callous", "Calm", "Capable", "Capricious", "Careful", "Careless", "Caring", "Cautious", "Ceaseless", "Certain", 
"Changeable", "Charming", "Cheap", "Cheerful", "Chemical", "Chief", "Childlike", "Chilly", "Chivalrous", "Chubby", 
"Chunky", "Clammy", "Classy", "Clean", "Clear", "Clever", "Cloistered", "Cloudy", "Closed", "Clumsy", "Cluttered", 
"Coherent", "Cold", "Colorful", "Colossal", "Combative", "Comfortable", "Common", "Complete", "Complex", "Concerned", 
"Condemned", "Confused", "Conscious", "Cooing", "Cool", "Cooperative", "Coordinated", "Courageous", "Cowardly", 
"Crabby", "Craven", "Crazy", "Creepy", "Crooked", "Crowded", "Cruel", "Cuddly", "Cultured", "Cumbersome", "Curious", 
"Curly", "Curved", "Curvy", "Cut", "Cute", "Cute", "Cynical", "Daffy", "Daily", "Damaged", "Damaging", "Damp", 
"Dangerous", "Dapper", "Dark", "Dashing", "Dazzling", "Dead", "Deadpan", "Deafening", "Dear", "Debonair", "Decisive", 
"Decorous", "Deep", "Deeply", "Defeated", "Defective", "Defiant", "Delicate", "Delicious", "Delightful", "Demonic", 
"Delirious", "Dependent", "Depressed", "Deranged", "Descriptive", "Deserted", "Detailed", "Determined", "Devilish", 
"Didactic", "Different", "Difficult", "Diligent", "Direful", "Dirty", "Disagreeable", "Disastrous", "Discreet", 
"Disgusted", "Disgusting", "Disillusioned", "Dispensable", "Distinct", "Disturbed", "Divergent", "Dizzy", "Domineering", 
"Doubtful", "Drab", "Draconian", "Dramatic", "Dreary", "Drunk", "Dry", "Dull", "Dusty", "Dynamic", "Dysfunctional", 
"Eager", "Early", "Earsplitting", "Earthy", "Easy", "Eatable", "Economic", "Educated", "Efficacious", "Efficient", 
"Eight", "Elastic", "Elated", "Elderly", "Electric", "Elegant", "Elfin", "Elite", "Embarrassed", "Eminent", "Empty", 
"Enchanted", "Enchanting", "Encouraging", "Endurable", "Energetic", "Enormous", "Entertaining", "Enthusiastic", 
"Envious", "Equable", "Equal", "Erect", "Erratic", "Ethereal", "Evanescent", "Evasive", "Even excellent excited", 
"Exciting exclusive", "Exotic", "Expensive", "Extra-large extra-small exuberant", "Exultant", "Fabulous", "Faded", 
"Faint fair", "Faithful", "Fallacious", "False familiar famous", "Fanatical", "Fancy", "Fantastic", "Far", 
"Far-flung", "Fascinated", "Fast", "Fat faulty", "Fearful fearless", "Feeble feigned", "Female fertile", "Festive", 
"Few fierce", "Filthy", "Fine", "Finicky", "First", " five", " fixed", " flagrant", "Flaky", "Flashy", "Flat", 
"Flawless", "Flimsy", " flippant", "Flowery", "Fluffy", "Fluttering", " foamy", "Foolish", "Foregoing", "Forgetful", 
"Fortunate", "Four frail", "Fragile", "Frantic", "Free", " freezing", " frequent", " fresh", " fretful", "Friendly", 
"Frightened frightening full fumbling functional", "Funny", "Furry furtive", "Future futuristic", "Fuzzy ", "Gabby", 
"Gainful", "Gamy", "Gaping", "Garrulous", "Gaudy", "General gentle", "Giant", "Giddy", "Gifted", "Gigantic", "Glamorous", 
"Gleaming", "Glib", "Glistening glorious", "Glossy", "Godly", "Good", "Goofy", "Gorgeous", "Graceful", "Grandiose", 
"Grateful gratis", "Gray greasy great", "Greedy", "Green grey grieving", "Groovy", "Grotesque", "Grouchy", 
"Grubby gruesome", "Grumpy", "Guarded", "Guiltless", "Gullible gusty", "Guttural H habitual", "Half", "Hallowed", 
"Halting", "Handsome", "Handsomely", "Handy", "Hanging", "Hapless", "Happy", "Hard", "Hard-to-find", "Harmonious", 
"Harsh", "Hateful", "Heady", "Healthy", "Heartbreaking", "Heavenly heavy hellish", "Helpful", "Helpless", "Hesitant", 
"Hideous high", "Highfalutin", "High-pitched", "Hilarious", "Hissing", "Historical", "Holistic", "Hollow", "Homeless", 
"Homely", "Honorable", "Horrible", "Hospitable", "Hot huge", "Hulking", "Humdrum", "Humorous", "Hungry", "Hurried", 
"Hurt", "Hushed", "Husky", "Hypnotic", "Hysterical", "Icky", "Icy", "Idiotic", "Ignorant", "Ill", "Illegal", 
"Ill-fated", "Ill-informed", "Illustrious", "Imaginary", "Immense", "Imminent", "Impartial", "Imperfect", "Impolite", 
"Important", "Imported", "Impossible", "Incandescent", "Incompetent", "Inconclusive", "Industrious", "Incredible", 
"Inexpensive", "Infamous", "Innate", "Innocent", "Inquisitive", "Insidious", "Instinctive", "Intelligent", "Interesting", 
"Internal", "Invincible", "Irate", "Irritating", "Itchy", "Jaded", "Jagged", "Jazzy", "Jealous", "Jittery", "Jobless", 
"Jolly", "Joyous", "Judicious", "Juicy", "Jumbled", "Jumpy", "Juvenile", "Kaput", "Keen", "Kind", "Kindhearted", 
"Kindly", "Knotty", "Knowing", "Knowledgeable", "Known", "Labored", "Lackadaisical", "Lacking", "Lame", "Lamentable", 
"Languid", "Large", "Last", "Late", "Laughable", "Lavish", "Lazy", "Lean", "Learned", "Left", "Legal", "Lethal", 
"Level", "Lewd", "Light", "Like", "Likeable", "Limping", "Literate", "Little", "Lively", "Lively", "Living", "Lonely", 
"Long", "Longing", "Long-term", "Loose", "Lopsided", "Loud", "Loutish", "Lovely", "Loving", "Low", "Lowly", "Lucky", 
"Ludicrous", "Lumpy", "Lush", "Luxuriant", "Lying", "Lyrical", "Macabre", "Macho", "Maddening", "Madly", "Magenta", 
"Magical", "Magnificent", "Majestic", "Makeshift", "Male", "Malicious", "Mammoth", "Maniacal", "Many", "Marked", 
"Massive", "Married", "Marvelous", "Material", "Materialistic", "Mature", "Mean", "Measly", "Meaty", "Medical", "Meek", 
"Mellow", "Melodic", "Melted", "Merciful", "Mere", "Messy", "Mighty", "Military", "Milky", "Mindless", "Miniature", 
"Minor", "Miscreant", "Misty", "Mixed", "Moaning", "Modern", "Moldy", "Momentous", "Motionless", "Mountainous", 
"Muddled", "Mundane", "Murky", "Mushy", "Mute", "Mysterious", "Naive", "Nappy", "Narrow", "Nasty", "Natural", 
"Naughty", "Nauseating", "Near", "Neat", "Nebulous", "Necessary", "Needless", "Needy", "Neighborly", "Nervous", 
"New", "Next", "Nice", "Nifty", "Nimble", "Nine", "Nippy", "Noiseless", "Noisy", "Nonchalant", "Nondescript", 
"Nonstop", "Normal", "Nostalgic", "Nosy", "Noxious", "Null", "Numberless", "Numerous", "Nutritious", "Nutty", 
"Oafish", "Obedient", "Obeisant", "Obese", "Obnoxious", "Obscene", "Obsequious", "Observant", "Obsolete", 
"Obtainable", "Oceanic", "Odd", "Offbeat", "Old", "Old-fashioned", "Omniscient", "One", "Onerous", "Open", 
"Opposite", "Optimal", "Orange", "Ordinary", "Organic", "Ossified", "Outgoing", "Outrageous", "Outstanding", 
"Oval", "Overconfident", "Overjoyed", "Overrated", "Overt", "Overwrought", "Painful", "Painstaking", "Pale", 
"Paltry", "Panicky", "Panoramic", "Parallel", "Parched", "Parsimonious", "Past", "Pastoral", "Pathetic", "Peaceful", 
"Penitent", "Perfect", "Periodic", "Permissible", "Perpetual", "Petite", "Petite", "Phobic", "Physical", "Picayune", 
"Pink", "Piquant", "Placid", "Plain", "Plant", "Plastic", "Plausible", "Pleasant", "Plucky", "Pointless", "Poised", 
"Polite", "Political", "Poor", "Possessive", "Possible", "Powerful", "Precious", "Premium", "Present", "Pretty", 
"Previous", "Pricey", "Prickly", "Private", "Probable", "Productive", "Profuse", "Protective", "Proud", "Psychedelic", 
"Psychotic", "Public", "Puffy", "Pumped", "Puny", "Purple", "Purring", "Pushy", "Puzzled", "Puzzling", "Quack", 
"Quaint", "Quarrelsome", "Questionable", "Quick", "Quickest", "Quiet", "Quirky", "Quixotic", "Quizzical", "Rabid", 
"Racial", "Ragged", "Rainy", "Rambunctious", "Rampant", "Rapid", "Rare", "Raspy", "Ratty", "Ready", "Real", "Rebel", 
"Receptive", "Recondite", "Red", "Redundant", "Reflective", "Regular", "Relieved", "Remarkable", "Reminiscent", 
"Repulsive", "Resolute", "Resonant", "Responsible", "Rhetorical", "Rich", "Right", "Righteous", "Rightful", "Rigid", 
"Ripe", "Ritzy", "Roasted", "Robust", "Romantic", "Roomy", "Rotten", "Rough", "Round", "Royal", "Ruddy", "Rude", 
"Rural", "Rustic", "Ruthless", "Sable", "Sad", "Safe", "Salty", "Same", "Sassy", "Satisfying", "Savory", "Scandalous", 
"Scarce", "Scared", "Scary", "Scattered", "Scientific", "Scintillating", "Scrawny", "Screeching", "Second", 
"Second-hand", "Secret", "Secretive", "Sedate", "Seemly", "Selective", "Selfish", "Separate", "Serious", "Shaggy", 
"Shaky", "Shallow", "Sharp", "Shiny", "Shivering", "Shocking", "Short", "Shrill", "Shut", "Shy", "Sick", "Silent", 
"Silent", "Silky", "Silly", "Simple", "Simplistic", "Sincere", "Six", "Skillful", "Skinny", "Sleepy", "Slim", "Slimy", 
"Slippery", "Sloppy", "Slow", "Small", "Smart", "Smelly", "Smiling", "Smoggy", "Smooth", "Sneaky", "Snobbish", 
"Snotty", "Soft", "Soggy", "Solid", "Somber", "Sophisticated", "Sordid", "Sore", "Sore", "Sour", "Sparkling", 
"Special", "Spectacular", "Spicy", "Spiffy", "Spiky", "Spiritual", "Spiteful", "Splendid", "Spooky", "Spotless", 
"Spotted", "Spotty", "Spurious", "Squalid", "Square", "Squealing", "Squeamish", "Staking", "Stale", "Standing", 
"Statuesque", "Steadfast", "Steady", "Steep", "Stereotyped", "Sticky", "Stiff", "Stimulating", "Stingy", "Stormy", 
"Straight", "Strange", "Striped", "Strong", "Stupendous", "Stupid", "Sturdy", "Subdued", "Subsequent", "Substantial", 
"Successful", "Succinct", "Sudden", "Sulky", "Super", "Superb", "Superficial", "Supreme", "Swanky", "Sweet", 
"Sweltering", "Swift", "Symptomatic", "Synonymous", "Taboo", "Tacit", "Tacky", "Talented", "Tall", "Tame", "Tan", 
"Tangible", "Tangy", "Tart", "Tasteful", "Tasteless", "Tasty", "Tawdry", "Tearful", "Tedious", "Teeny", "Teeny-tiny", 
"Telling", "Temporary", "Ten", "Tender tense", "Tense", "Tenuous", "Terrible", "Terrific", "Tested", "Testy", 
"Thankful", "Therapeutic", "Thick", "Thin", "Thinkable", "Third", "Thirsty", "Thoughtful", "Thoughtless", 
"Threatening", "Three", "Thundering", "Tidy", "Tight", "Tightfisted", "Tiny", "Tired", "Tiresome", "Toothsome", 
"Torpid", "Tough", "Towering", "Tranquil", "Trashy", "Tremendous", "Tricky", "Trite", "Troubled", "Truculent", 
"True", "Truthful", "Two", "Typical", "Ubiquitous", "Ugliest", "Ugly", "Ultra", "Unable", "Unaccountable", 
"Unadvised", "Unarmed", "Unbecoming", "Unbiased", "Uncovered", "Understood", "Undesirable", "Unequal", "Unequaled", 
"Uneven", "Unhealthy", "Uninterested", "Unique", "Unkempt", "Unknown", "Unnatural", "Unruly", "Unsightly", "Unsuitable", 
"Untidy", "Unused", "Unusual", "Unwieldy", "Unwritten", "Upbeat", "Uppity", "Upset", "Uptight", "Used", "Useful", 
"Useless", "Utopian", "Utter", "Uttermost", "Vacuous", "Vagabond", "Vague", "Valuable", "Various", "Vast", "Vengeful", 
"Venomous", "Verdant", "Versed", "Victorious", "Vigorous", "Violent", "Violet", "Vivacious", "Voiceless", "Volatile", 
"Voracious", "Vulgar", "Wacky", "Waggish", "Waiting", "", "Wakeful", "Wandering", "Wanting", "Warlike", "Warm", "Wary", 
"Wasteful", "Watery", "Weak", "Wealthy", "Weary", "Well-groomed", "Well-made", "Well-off", "Well-to-do", "Wet", 
"Whimsical", "Whispering", "White", "Whole", "Wholesale", "Wicked", "Wide", "Wide-eyed", "Wiggly", "Wild", "Willing", 
"Windy", "Wiry", "Wise", "Wistful", "Witty", "Woebegone", "Womanly", "Wonderful", "Wooden", "Woozy", "Workable", 
"Worried", "Worthless", "Wrathful", "Wretched", "Wrong", "Wry", "Xenophobic", "Yellow", "Yielding", "Young", "Youthful", 
"Yummy", "Zany", "Zealous", "Zesty", "Zippy", "Zonked"
];

const names = [
"Aaran",  "Aaren",  "Aarez",  "Aarman",  "Aaron",  "Aaron-James",  "Aarron",  "Aaryan",  "Aaryn",  "Aayan",  "Aazaan",  
"Abaan",  "Abbas",  "Abdallah",  "Abdalroof",  "Abdihakim",  "Abdirahman",  "Abdisalam",  "Abdul",  "Abdul-Aziz",  
"Abdulbasir",  "Abdulkadir",  "Abdulkarem",  "Abdulkhader",  "Abdullah",  "Abdul-Majeed",  "Abdulmalik",  
"Abdul-Rehman",  "Abdur",  "Abdurraheem",  "Abdur-Rahman",  "Abdur-Rehmaan",  "Abel",  "Abhinav",  "Abhisumant",  
"Abid",  "Abir",  "Abraham",  "Abu",  "Abubakar",  "Ace",  "Adain",  "Adam",  "Adam-James",  "Addison",  
"Addisson",  "Adegbola",  "Adegbolahan",  "Aden",  "Adenn",  "Adie",  "Adil",  "Aditya",  "Adnan",  "Adrian",  
"Adrien",  "Aedan",  "Aedin",  "Aedyn",  "Aeron",  "Afonso",  "Ahmad",  "Ahmed",  "Ahmed-Aziz",  "Ahoua",  
"Ahtasham",  "Aiadan",  "Aidan",  "Aiden",  "Aiden-Jack",  "Aiden-Vee",  "Aidian",  "Aidy",  "Ailin",  "Aiman",  
"Ainsley",  "Ainslie",  "Airen",  "Airidas",  "Airlie",  "AJ",  "Ajay",  "A-Jay",  "Ajayraj",  "Akan",  "Akram",  
"Al",  "Ala",  "Alan",  "Alanas",  "Alasdair",  "Alastair",  "Alber",  "Albert",  "Albie",  "Aldred",  "Alec",  
"Aled",  "Aleem",  "Aleksandar",  "Aleksander",  "Aleksandr",  "Aleksandrs",  "Alekzander",  "Alessandro",  "Alessio",  
"Alex",  "Alexander",  "Alexei",  "Alexx",  "Alexzander",  "Alf",  "Alfee",  "Alfie",  "Alfred",  "Alfy",  "Alhaji",  
"Al-Hassan",  "Ali",  "Aliekber",  "Alieu",  "Alihaider",  "Alisdair",  "Alishan",  "Alistair",  "Alistar",  "Alister",  
"Aliyaan",  "Allan",  "Allan-Laiton",  "Allen",  "Allesandro",  "Allister",  "Ally",  "Alphonse",  "Altyiab",  "Alum",  
"Alvern",  "Alvin",  "Alyas",  "Amaan",  "Aman",  "Amani",  "Ambanimoh",  "Ameer",  "Amgad",  "Ami",  "Amin",  "Amir",  
"Ammaar",  "Ammar",  "Ammer",  "Amolpreet",  "Amos",  "Amrinder",  "Amrit",  "Amro",  "Anay",  "Andrea",  "Andreas",  
"Andrei",  "Andrejs",  "Andrew",  "Andy",  "Anees",  "Anesu",  "Angel",  "Angelo",  "Angus",  "Anir",  "Anis",  "Anish",  
"Anmolpreet",  "Annan",  "Anndra",  "Anselm",  "Anthony",  "Anthony-John",  "Antoine",  "Anton",  "Antoni",  "Antonio",  
"Antony",  "Antonyo",  "Anubhav",  "Aodhan",  "Aon",  "Aonghus",  "Apisai",  "Arafat",  "Aran",  "Arandeep",  "Arann",  
"Aray",  "Arayan",  "Archibald",  "Archie",  "Arda",  "Ardal",  "Ardeshir",  "Areeb",  "Areez",  "Aref",  "Arfin",  
"Argyle",  "Argyll",  "Ari",  "Aria",  "Arian",  "Arihant",  "Aristomenis",  "Aristotelis",  "Arjuna",  "Arlo",  
"Armaan",  "Arman",  "Armen",  "Arnab",  "Arnav",  "Arnold",  "Aron",  "Aronas",  "Arran",  "Arrham",  "Arron",  
"Arryn",  "Arsalan",  "Artem",  "Arthur",  "Artur",  "Arturo",  "Arun",  "Arunas",  "Arved",  "Arya",  "Aryan",  
"Aryankhan",  "Aryian",  "Aryn",  "Asa",  "Asfhan",  "Ash",  "Ashlee-jay",  "Ashley",  "Ashton",  "Ashton-Lloyd",  
"Ashtyn",  "Ashwin",  "Asif",  "Asim",  "Aslam",  "Asrar",  "Ata",  "Atal",  "Atapattu",  "Ateeq",  "Athol",  "Athon",  
"Athos-Carlos",  "Atli",  "Atom",  "Attila",  "Aulay",  "Aun",  "Austen",  "Austin",  "Avani",  "Averon",  "Avi",  
"Avinash",  "Avraham",  "Awais",  "Awwal",  "Axel",  "Ayaan",  "Ayan",  "Aydan",  "Ayden",  "Aydin",  "Aydon",  
"Ayman",  "Ayomide",  "Ayren",  "Ayrton",  "Aytug",  "Ayub",  "Ayyub",  "Azaan",  "Azedine",  "Azeem",  "Azim",  
"Aziz",  "Azlan",  "Azzam",  "Azzedine",  "Babatunmise",  "Babur",  "Bader",  "Badr",  "Badsha",  "Bailee",  
"Bailey",  "Bailie",  "Bailley",  "Baillie",  "Baley",  "Balian",  "Banan",  "Barath",  "Barkley",  "Barney",  
"Baron",  "Barrie",  "Barry",  "Bartlomiej",  "Bartosz",  "Basher",  "Basile",  "Baxter",  "Baye",  "Bayley",  
"Beau",  "Beinn",  "Bekim",  "Believe",  "Ben",  "Bendeguz",  "Benedict",  "Benjamin",  "Benjamyn",  "Benji",  
"Benn",  "Bennett",  "Benny",  "Benoit",  "Bentley",  "Berkay",  "Bernard",  "Bertie",  "Bevin",  "Bezalel",  
"Bhaaldeen",  "Bharath",  "Bilal",  "Bill",  "Billy",  "Binod",  "Bjorn",  "Blaike",  "Blaine",  "Blair",  
"Blaire",  "Blake",  "Blazej",  "Blazey",  "Blessing",  "Blue",  "Blyth",  "Bo",  "Boab",  "Bob",  "Bobby",  
"Bobby-Lee",  "Bodhan",  "Boedyn",  "Bogdan",  "Bohbi",  "Bony",  "Bowen",  "Bowie",  "Boyd",  "Bracken",  "Brad",  
"Bradan",  "Braden",  "Bradley",  "Bradlie",  "Bradly",  "Brady",  "Bradyn",  "Braeden",  "Braiden",  "Brajan",  
"Brandan",  "Branden",  "Brandon",  "Brandonlee",  "Brandon-Lee",  "Brandyn",  "Brannan",  "Brayden",  "Braydon",  
"Braydyn",  "Breandan",  "Brehme",  "Brendan",  "Brendon",  "Brendyn",  "Breogan",  "Bret",  "Brett",  "Briaddon",  
"Brian",  "Brodi",  "Brodie",  "Brody",  "Brogan",  "Broghan",  "Brooke",  "Brooklin",  "Brooklyn",  "Bruce",  
"Bruin",  "Bruno",  "Brunon",  "Bryan",  "Bryce",  "Bryden",  "Brydon",  "Brydon-Craig",  "Bryn",  "Brynmor",  
"Bryson",  "Buddy",  "Bully",  "Burak",  "Burhan",  "Butali",  "Butchi",  "Byron",  "Cabhan",  "Cadan",  "Cade",  
"Caden",  "Cadon",  "Cadyn",  "Caedan",  "Caedyn",  "Cael",  "Caelan",  "Caelen",  "Caethan",  "Cahl",  "Cahlum",  
"Cai",  "Caidan",  "Caiden",  "Caiden-Paul",  "Caidyn",  "Caie",  "Cailaen",  "Cailean",  "Caileb-John",  "Cailin",  
"Cain",  "Caine",  "Cairn",  "Cal",  "Calan",  "Calder",  "Cale",  "Calean",  "Caleb",  "Calen",  "Caley",  "Calib",  
"Calin",  "Callahan",  "Callan",  "Callan-Adam",  "Calley",  "Callie",  "Callin",  "Callum",  "Callun",  "Callyn",  
"Calum",  "Calum-James",  "Calvin",  "Cambell",  "Camerin",  "Cameron",  "Campbel",  "Campbell",  "Camron",  "Caolain",  
"Caolan",  "Carl",  "Carlo",  "Carlos",  "Carrich",  "Carrick",  "Carson",  "Carter",  "Carwyn",  "Casey",  "Casper",  
"Cassy",  "Cathal",  "Cator",  "Cavan",  "Cayden",  "Cayden-Robert",  "Cayden-Tiamo",  "Ceejay",  "Ceilan",  "Ceiran",  
"Ceirin",  "Ceiron",  "Cejay",  "Celik",  "Cephas",  "Cesar",  "Cesare",  "Chad",  "Chaitanya",  "Chang-Ha",  
"Charles",  "Charley",  "Charlie",  "Charly",  "Chase",  "Che",  "Chester",  "Chevy",  "Chi",  "Chibudom",  "Chidera",  
"Chimsom",  "Chin",  "Chintu",  "Chiqal",  "Chiron",  "Chris",  "Chris-Daniel",  "Chrismedi",  "Christian",  
"Christie",  "Christoph",  "Christopher",  "Christopher-Lee",  "Christy",  "Chu",  "Chukwuemeka",  "Cian",  "Ciann",  
"Ciar",  "Ciaran",  "Ciarian",  "Cieran",  "Cillian",  "Cillin",  "Cinar",  "CJ",  "C-Jay",  "Clark",  "Clarke",  
"Clayton",  "Clement",  "Clifford",  "Clyde",  "Cobain",  "Coban",  "Coben",  "Cobi",  "Cobie",  "Coby",  "Codey",  
"Codi",  "Codie",  "Cody",  "Cody-Lee",  "Coel",  "Cohan",  "Cohen",  "Colby",  "Cole",  "Colin",  "Coll",  "Colm",  
"Colt",  "Colton",  "Colum",  "Colvin",  "Comghan",  "Conal",  "Conall",  "Conan",  "Conar",  "Conghaile",  "Conlan",  
"Conley",  "Conli",  "Conlin",  "Conlly",  "Conlon",  "Conlyn",  "Connal",  "Connall",  "Connan",  "Connar",  
"Connel",  "Connell",  "Conner",  "Connolly",  "Connor",  "Connor-David",  "Conor",  "Conrad",  "Cooper",  "Copeland",  
"Coray",  "Corben",  "Corbin",  "Corey",  "Corey-James",  "Corey-Jay",  "Cori",  "Corie",  "Corin",  "Cormac",  
"Cormack",  "Cormak",  "Corran",  "Corrie",  "Cory",  "Cosmo",  "Coupar",  "Craig",  "Craig-James",  "Crawford",  
"Creag",  "Crispin",  "Cristian",  "Crombie",  "Cruiz",  "Cruz",  "Cuillin",  "Cullen",  "Cullin",  "Curtis",  
"Cyrus",  "Daanyaal",  "Daegan",  "Daegyu",  "Dafydd",  "Dagon",  "Dailey",  "Daimhin",  "Daithi",  "Dakota",  
"Daksh",  "Dale",  "Dalong",  "Dalton",  "Damian",  "Damien",  "Damon",  "Dan",  "Danar",  "Dane",  "Danial",  
"Daniel",  "Daniele",  "Daniel-James",  "Daniels",  "Daniil",  "Danish",  "Daniyal",  "Danniel",  "Danny",  "Dante",  
"Danyal",  "Danyil",  "Danys",  "Daood",  "Dara",  "Darach",  "Daragh",  "Darcy",  "D'arcy",  "Dareh",  "Daren",  
"Darien",  "Darius",  "Darl",  "Darn",  "Darrach",  "Darragh",  "Darrel",  "Darrell",  "Darren",  "Darrie",  "Darrius",  
"Darroch",  "Darryl",  "Darryn",  "Darwyn",  "Daryl",  "Daryn",  "Daud",  "Daumantas",  "Davi",  "David",  "David-Jay",  
"David-Lee",  "Davie",  "Davis",  "Davy",  "Dawid",  "Dawson",  "Dawud",  "Dayem",  "Daymian",  "Deacon",  "Deagan",  
"Dean",  "Deano",  "Decklan",  "Declain",  "Declan",  "Declyan",  "Declyn",  "Dedeniseoluwa",  "Deecan",  "Deegan",  
"Deelan",  "Deklain-Jaimes",  "Del",  "Demetrius",  "Denis",  "Deniss",  "Dennan",  "Dennin",  "Dennis",  "Denny",  
"Dennys",  "Denon",  "Denton",  "Denver",  "Denzel",  "Deon",  "Derek",  "Derick",  "Derin",  "Dermot",  "Derren",  
"Derrie",  "Derrin",  "Derron",  "Derry",  "Derryn",  "Deryn",  "Deshawn",  "Desmond",  "Dev",  "Devan",  "Devin",  
"Devlin",  "Devlyn",  "Devon",  "Devrin",  "Devyn",  "Dex",  "Dexter",  "Dhani",  "Dharam",  "Dhavid",  "Dhyia",  
"Diarmaid",  "Diarmid",  "Diarmuid",  "Didier",  "Diego",  "Diesel",  "Diesil",  "Digby",  "Dilan",  "Dilano",  
"Dillan",  "Dillon",  "Dilraj",  "Dimitri",  "Dinaras",  "Dion",  "Dissanayake",  "Dmitri",  "Doire",  "Dolan",  
"Domanic",  "Domenico",  "Domhnall",  "Dominic",  "Dominick",  "Dominik",  "Donald",  "Donnacha",  "Donnie",  
"Dorian",  "Dougal",  "Douglas",  "Dougray",  "Drakeo",  "Dre",  "Dregan",  "Drew",  "Dugald",  "Duncan",  "Duriel",  
"Dustin",  "Dylan",  "Dylan-Jack",  "Dylan-James",  "Dylan-John",  "Dylan-Patrick",  "Dylin",  "Dyllan",  
"Dyllan-James",  "Dyllon",  "Eadie",  "Eagann",  "Eamon",  "Eamonn",  "Eason",  "Eassan",  "Easton",  "Ebow",  "Ed",  
"Eddie",  "Eden",  "Ediomi",  "Edison",  "Eduardo",  "Eduards",  "Edward",  "Edwin",  "Edwyn",  "Eesa",  "Efan",  
"Efe",  "Ege",  "Ehsan",  "Ehsen",  "Eiddon",  "Eidhan",  "Eihli",  "Eimantas",  "Eisa",  "Eli",  "Elias",  "Elijah",  
"Eliot",  "Elisau",  "Eljay",  "Eljon",  "Elliot",  "Elliott",  "Ellis",  "Ellisandro",  "Elshan",  "Elvin",  "Elyan",  
"Emanuel",  "Emerson",  "Emil",  "Emile",  "Emir",  "Emlyn",  "Emmanuel",  "Emmet",  "Eng",  "Eniola",  "Enis",  
"Ennis",  "Enrico",  "Enrique",  "Enzo",  "Eoghain",  "Eoghan",  "Eoin",  "Eonan",  "Erdehan",  "Eren",  "Erencem",  
"Eric",  "Ericlee",  "Erik",  "Eriz",  "Ernie-Jacks",  "Eroni",  "Eryk",  "Eshan",  "Essa",  "Esteban",  "Ethan",  
"Etienne",  "Etinosa",  "Euan",  "Eugene",  "Evan",  "Evann",  "Ewan",  "Ewen",  "Ewing",  "Exodi",  "Ezekiel",  
"Ezra",  "Fabian",  "Fahad",  "Faheem",  "Faisal",  "Faizaan",  "Famara",  "Fares",  "Farhaan",  "Farhan",  "Farren",  
"Farzad",  "Fauzaan",  "Favour",  "Fawaz",  "Fawkes",  "Faysal",  "Fearghus",  "Feden",  "Felix",  "Fergal",  "Fergie",  
"Fergus",  "Ferre",  "Fezaan",  "Fiachra",  "Fikret",  "Filip",  "Filippo",  "Finan",  "Findlay",  "Findlay-James",  
"Findlie",  "Finlay",  "Finley",  "Finn",  "Finnan",  "Finnean",  "Finnen",  "Finnlay",  "Finnley",  "Fintan",  
"Fionn",  "Firaaz",  "Fletcher",  "Flint",  "Florin",  "Flyn",  "Flynn",  "Fodeba",  "Folarinwa",  "Forbes",  "Forgan",  
"Forrest",  "Fox",  "Francesco",  "Francis",  "Francisco",  "Franciszek",  "Franco",  "Frank",  "Frankie",  "Franklin",  
"Franko",  "Fraser",  "Frazer",  "Fred",  "Freddie",  "Frederick",  "Fruin",  "Fyfe",  "Fyn",  "Fynlay",  "Fynn",  
"Gabriel",  "Gallagher",  "Gareth",  "Garren",  "Garrett",  "Garry",  "Gary",  "Gavin",  "Gavin-Lee",  "Gene",  "Geoff", 
"Geoffrey",  "Geomer",  "Geordan",  "Geordie",  "George",  "Georgia",  "Georgy",  "Gerard",  "Ghyll",  "Giacomo",  
"Gian",  "Giancarlo",  "Gianluca",  "Gianmarco",  "Gideon",  "Gil",  "Gio",  "Girijan",  "Girius",  "Gjan",  "Glascott", 
"Glen",  "Glenn",  "Gordon",  "Grady",  "Graeme",  "Graham",  "Grahame",  "Grant",  "Grayson",  "Greg",  "Gregor", 
"Gregory",  "Greig",  "Griffin",  "Griffyn",  "Grzegorz",  "Guang",  "Guerin",  "Guillaume",  "Gurardass",  "Gurdeep", 
"Gursees",  "Gurthar",  "Gurveer",  "Gurwinder",  "Gus",  "Gustav",  "Guthrie",  "Guy",  "Gytis",  "Habeeb",  "Hadji",
"Hadyn",  "Hagun",  "Haiden",  "Haider",  "Hamad",  "Hamid",  "Hamish",  "Hamza",  "Hamzah",  "Han",  "Hansen",  "Hao",  
"Hareem",  "Hari",  "Harikrishna",  "Haris",  "Harish",  "Harjeevan",  "Harjyot",  "Harlee",  "Harleigh",  "Harley",  
"Harman",  "Harnek",  "Harold",  "Haroon",  "Harper",  "Harri",  "Harrington",  "Harris",  "Harrison",  "Harry",  
"Harvey",  "Harvie",  "Harvinder",  "Hasan",  "Haseeb",  "Hashem",  "Hashim",  "Hassan",  "Hassanali",  "Hately",  
"Havila",  "Hayden",  "Haydn",  "Haydon",  "Haydyn",  "Hcen",  "Hector",  "Heddle",  "Heidar",  "Heini",  "Hendri",  
"Henri",  "Henry",  "Herbert",  "Heyden",  "Hiro",  "Hirvaansh",  "Hishaam",  "Hogan",  "Honey",  "Hong",  "Hope",  
"Hopkin",  "Hosea",  "Howard",  "Howie",  "Hristomir",  "Hubert",  "Hugh",  "Hugo",  "Humza",  "Hunter",  "Husnain",  
"Hussain",  "Hussan",  "Hussnain",  "Hussnan",  "Hyden",  "I",  "Iagan",  "Iain",  "Ian",  "Ibraheem",  "Ibrahim",  
"Idahosa",  "Idrees",  "Idris",  "Iestyn",  "Ieuan",  "Igor",  "Ihtisham",  "Ijay",  "Ikechukwu",  "Ikemsinachukwu",  
"Ilyaas",  "Ilyas",  "Iman",  "Immanuel",  "Inan",  "Indy",  "Ines",  "Innes",  "Ioannis",  "Ireayomide",  "Ireoluwa",  
"Irvin",  "Irvine",  "Isa",  "Isaa",  "Isaac",  "Isaiah",  "Isak",  "Isher",  "Ishwar",  "Isimeli",  "Isira",  
"Ismaeel",  "Ismail",  "Israel",  "Issiaka",  "Ivan",  "Ivar",  "Izaak",  "J",  "Jaay",  "Jac",  "Jace",  "Jack",  
"Jacki",  "Jackie",  "Jack-James",  "Jackson",  "Jacky",  "Jacob",  "Jacques",  "Jad",  "Jaden",  "Jadon",  "Jadyn",  
"Jae",  "Jagat",  "Jago",  "Jaheim",  "Jahid",  "Jahy",  "Jai",  "Jaida",  "Jaiden",  "Jaidyn",  "Jaii",  "Jaime",  
"Jai-Rajaram",  "Jaise",  "Jak",  "Jake",  "Jakey",  "Jakob",  "Jaksyn",  "Jakub",  "Jamaal",  "Jamal",  "Jameel",  
"Jameil",  "James",  "James-Paul",  "Jamey",  "Jamie",  "Jan",  "Jaosha",  "Jardine",  "Jared",  "Jarell",  "Jarl",  
"Jarno",  "Jarred",  "Jarvi",  "Jasey-Jay",  "Jasim",  "Jaskaran",  "Jason",  "Jasper",  "Jaxon",  "Jaxson",  "Jay",  
"Jaydan",  "Jayden",  "Jayden-James",  "Jayden-Lee",  "Jayden-Paul",  "Jayden-Thomas",  "Jaydn",  "Jaydon",  "Jaydyn",  
"Jayhan",  "Jay-Jay",  "Jayke",  "Jaymie",  "Jayse",  "Jayson",  "Jaz",  "Jazeb",  "Jazib",  "Jazz",  "Jean",  
"Jean-Lewis",  "Jean-Pierre",  "Jebadiah",  "Jed",  "Jedd",  "Jedidiah",  "Jeemie",  "Jeevan",  "Jeffrey",  "Jensen",  
"Jenson",  "Jensyn",  "Jeremy",  "Jerome",  "Jeronimo",  "Jerrick",  "Jerry",  "Jesse",  "Jesuseun",  "Jeswin",  
"Jevan",  "Jeyun",  "Jez",  "Jia",  "Jian",  "Jiao",  "Jimmy",  "Jincheng",  "JJ",  "Joaquin",  "Joash",  "Jock",  
"Jody",  "Joe",  "Joeddy",  "Joel",  "Joey",  "Joey-Jack",  "Johann",  "Johannes",  "Johansson",  "John",  "Johnathan",  
"Johndean",  "Johnjay",  "John-Michael",  "Johnnie",  "Johnny",  "Johnpaul",  "John-Paul",  "John-Scott",  "Johnson",  
"Jole",  "Jomuel",  "Jon",  "Jonah",  "Jonatan",  "Jonathan",  "Jonathon",  "Jonny",  "Jonothan",  "Jon-Paul",  
"Jonson",  "Joojo",  "Jordan",  "Jordi",  "Jordon",  "Jordy",  "Jordyn",  "Jorge",  "Joris",  "Jorryn",  "Josan",  
"Josef",  "Joseph",  "Josese",  "Josh",  "Joshiah",  "Joshua",  "Josiah",  "Joss",  "Jostelle",  "Joynul",  "Juan",  
"Jubin",  "Judah",  "Jude",  "Jules",  "Julian",  "Julien",  "Jun",  "Junior",  "Jura",  "Justan",  "Justin",  
"Justinas",  "Kaan",  "Kabeer",  "Kabir",  "Kacey",  "Kacper",  "Kade",  "Kaden",  "Kadin",  "Kadyn",  "Kaeden",  
"Kael",  "Kaelan",  "Kaelin",  "Kaelum",  "Kai",  "Kaid",  "Kaidan",  "Kaiden",  "Kaidinn",  "Kaidyn",  "Kaileb",  
"Kailin",  "Kain",  "Kaine",  "Kainin",  "Kainui",  "Kairn",  "Kaison",  "Kaiwen",  "Kajally",  "Kajetan",  "Kalani",  
"Kale",  "Kaleb",  "Kaleem",  "Kal-el",  "Kalen",  "Kalin",  "Kallan",  "Kallin",  "Kalum",  "Kalvin",  "Kalvyn",  
"Kameron",  "Kames",  "Kamil",  "Kamran",  "Kamron",  "Kane",  "Karam",  "Karamvir",  "Karandeep",  "Kareem",  "Karim",  
"Karimas",  "Karl",  "Karol",  "Karson",  "Karsyn",  "Karthikeya",  "Kasey",  "Kash",  "Kashif",  "Kasim",  "Kasper",  
"Kasra",  "Kavin",  "Kayam",  "Kaydan",  "Kayden",  "Kaydin",  "Kaydn",  "Kaydyn",  "Kaydyne",  "Kayleb",  "Kaylem",  
"Kaylum",  "Kayne",  "Kaywan",  "Kealan",  "Kealon",  "Kean",  "Keane",  "Kearney",  "Keatin",  "Keaton",  "Keavan",  
"Keayn",  "Kedrick",  "Keegan",  "Keelan",  "Keelin",  "Keeman",  "Keenan",  "Keenan-Lee",  "Keeton",  "Kehinde",  
"Keigan",  "Keilan",  "Keir",  "Keiran",  "Keiren",  "Keiron",  "Keiryn",  "Keison",  "Keith",  "Keivlin",  "Kelam",  
"Kelan",  "Kellan",  "Kellen",  "Kelso",  "Kelum",  "Kelvan",  "Kelvin",  "Ken",  "Kenan",  "Kendall",  "Kendyn",  
"Kenlin",  "Kenneth",  "Kensey",  "Kenton",  "Kenyon",  "Kenzeigh",  "Kenzi",  "Kenzie",  "Kenzo",  "Kenzy",  "Keo",  
"Ker",  "Kern",  "Kerr",  "Kevan",  "Kevin",  "Kevyn",  "Kez",  "Khai",  "Khalan",  "Khaleel",  "Khaya",  "Khevien",  
"Khizar",  "Khizer",  "Kia",  "Kian",  "Kian-James",  "Kiaran",  "Kiarash",  "Kie",  "Kiefer",  "Kiegan",  "Kienan",  
"Kier",  "Kieran",  "Kieran-Scott",  "Kieren",  "Kierin",  "Kiern",  "Kieron",  "Kieryn",  "Kile",  "Killian",  "Kimi",  
"Kingston",  "Kinneil",  "Kinnon",  "Kinsey",  "Kiran",  "Kirk",  "Kirwin",  "Kit",  "Kiya",  "Kiyonari",  "Kjae",  
"Klein",  "Klevis",  "Kobe",  "Kobi",  "Koby",  "Koddi",  "Koden",  "Kodi",  "Kodie",  "Kody",  "Kofi",  "Kogan",  
"Kohen",  "Kole",  "Konan",  "Konar",  "Konnor",  "Konrad",  "Koray",  "Korben",  "Korbyn",  "Korey",  "Kori",  
"Korrin",  "Kory",  "Koushik",  "Kris",  "Krish",  "Krishan",  "Kriss",  "Kristian",  "Kristin",  "Kristofer",  
"Kristoffer",  "Kristopher",  "Kruz",  "Krzysiek",  "Krzysztof",  "Ksawery",  "Ksawier",  "Kuba",  "Kurt",  "Kurtis",  
"Kurtis-Jae",  "Kyaan",  "Kyan",  "Kyde",  "Kyden",  "Kye",  "Kyel",  "Kyhran",  "Kyie",  "Kylan",  "Kylar",  "Kyle",  
"Kyle-Derek",  "Kylian",  "Kym",  "Kynan",  "Kyral",  "Kyran",  "Kyren",  "Kyrillos",  "Kyro",  "Kyron",  "Kyrran",  
"Lachlainn",  "Lachlan",  "Lachlann",  "Lael",  "Lagan",  "Laird",  "Laison",  "Lakshya",  "Lance",  "Lancelot",  
"Landon",  "Lang",  "Lasse",  "Latif",  "Lauchlan",  "Lauchlin",  "Laughlan",  "Lauren",  "Laurence",  "Laurie",  
"Lawlyn",  "Lawrence",  "Lawrie",  "Lawson",  "Layne",  "Layton",  "Lee",  "Leigh",  "Leigham",  "Leighton",  "Leilan",  
"Leiten",  "Leithen",  "Leland",  "Lenin",  "Lennan",  "Lennen",  "Lennex",  "Lennon",  "Lennox",  "Lenny",  "Leno",  
"Lenon",  "Lenyn",  "Leo",  "Leon",  "Leonard",  "Leonardas",  "Leonardo",  "Lepeng",  "Leroy",  "Leven",  "Levi",  
"Levon",  "Levy",  "Lewie",  "Lewin",  "Lewis",  "Lex",  "Leydon",  "Leyland",  "Leylann",  "Leyton",  "Liall",  
"Liam",  "Liam-Stephen",  "Limo",  "Lincoln",  "Lincoln-John",  "Lincon",  "Linden",  "Linton",  "Lionel",  "Lisandro",  
"Litrell",  "Liyonela-Elam",  "LLeyton",  "Lliam",  "Lloyd",  "Lloyde",  "Loche",  "Lochlan",  "Lochlann",  
"Lochlan-Oliver",  "Lock",  "Lockey",  "Logan",  "Logann",  "Logan-Rhys",  "Loghan",  "Lokesh",  "Loki",  "Lomond",  
"Lorcan",  "Lorenz",  "Lorenzo",  "Lorne",  "Loudon",  "Loui",  "Louie",  "Louis",  "Loukas",  "Lovell",  "Luc",  
"Luca",  "Lucais",  "Lucas",  "Lucca",  "Lucian",  "Luciano",  "Lucien",  "Lucus",  "Luic",  "Luis",  "Luk",  "Luka",  
"Lukas",  "Lukasz",  "Luke",  "Lukmaan",  "Luqman",  "Lyall",  "Lyle",  "Lyndsay",  "Lysander",  "Maanav",  "Maaz",  
"Mac",  "Macallum",  "Macaulay",  "Macauley",  "Macaully",  "Machlan",  "Maciej",  "Mack",  "Mackenzie",  "Mackenzy",  
"Mackie",  "Macsen",  "Macy",  "Madaki",  "Maddison",  "Maddox",  "Madison",  "Madison-Jake",  "Madox",  "Mael",  
"Magnus",  "Mahan",  "Mahdi",  "Mahmoud",  "Maias",  "Maison",  "Maisum",  "Maitlind",  "Majid",  "Makensie",  
"Makenzie",  "Makin",  "Maksim",  "Maksymilian",  "Malachai",  "Malachi",  "Malachy",  "Malakai",  "Malakhy",  
"Malcolm",  "Malik",  "Malikye",  "Malo",  "Ma'moon",  "Manas",  "Maneet",  "Manmohan",  "Manolo",  "Manson",  
"Mantej",  "Manuel",  "Manus",  "Marc",  "Marc-Anthony",  "Marcel",  "Marcello",  "Marcin",  "Marco",  "Marcos",  
"Marcous",  "Marcquis",  "Marcus",  "Mario",  "Marios",  "Marius",  "Mark",  "Marko",  "Markus",  "Marley",  
"Marlin",  "Marlon",  "Maros",  "Marshall",  "Martin",  "Marty",  "Martyn",  "Marvellous",  "Marvin",  "Marwan",  
"Maryk",  "Marzuq",  "Mashhood",  "Mason",  "Mason-Jay",  "Masood",  "Masson",  "Matas",  "Matej",  "Mateusz",  
"Mathew",  "Mathias",  "Mathu",  "Mathuyan",  "Mati",  "Matt",  "Matteo",  "Matthew",  "Matthew-William",  "Matthias",  
"Max",  "Maxim",  "Maximilian",  "Maximillian",  "Maximus",  "Maxwell",  "Maxx",  "Mayeul",  "Mayson",  "Mazin",  
"Mcbride",  "McCaulley",  "McKade",  "McKauley",  "McKay",  "McKenzie",  "McLay",  "Meftah",  "Mehmet",  "Mehraz",  
"Meko",  "Melville",  "Meshach",  "Meyzhward",  "Micah",  "Michael",  "Michael-Alexander",  "Michael-James",  "Michal",  
"Michat",  "Micheal",  "Michee",  "Mickey",  "Miguel",  "Mika",  "Mikael",  "Mikee",  "Mikey",  "Mikhail",  "Mikolaj",  
"Miles",  "Millar",  "Miller",  "Milo",  "Milos",  "Milosz",  "Mir",  "Mirza",  "Mitch",  "Mitchel",  "Mitchell",  
"Moad",  "Moayd",  "Mobeen",  "Modoulamin",  "Modu",  "Mohamad",  "Mohamed",  "Mohammad",  "Mohammad-Bilal",  
"Mohammed",  "Mohanad",  "Mohd",  "Momin",  "Momooreoluwa",  "Montague",  "Montgomery",  "Monty",  "Moore",  "Moosa",  
"Moray",  "Morgan",  "Morgyn",  "Morris",  "Morton",  "Moshy",  "Motade",  "Moyes",  "Msughter",  "Mueez",  
"Muhamadjavad",  "Muhammad",  "Muhammed",  "Muhsin",  "Muir",  "Munachi",  "Muneeb",  "Mungo",  "Munir",  "Munmair",  
"Munro",  "Murdo",  "Murray",  "Murrough",  "Murry",  "Musa",  "Musse",  "Mustafa",  "Mustapha",  "Muzammil",  
"Muzzammil",  "Mykie",  "Myles",  "Mylo",  "Nabeel",  "Nadeem",  "Nader",  "Nagib",  "Naif",  "Nairn",  "Narvic",  
"Nash",  "Nasser",  "Nassir",  "Natan",  "Nate",  "Nathan",  "Nathanael",  "Nathanial",  "Nathaniel",  "Nathan-Rae",  
"Nawfal",  "Nayan",  "Neco",  "Neil",  "Nelson",  "Neo",  "Neshawn",  "Nevan",  "Nevin",  "Ngonidzashe",  "Nial",  
"Niall",  "Nicholas",  "Nick",  "Nickhill",  "Nicki",  "Nickson",  "Nicky",  "Nico",  "Nicodemus",  "Nicol",  
"Nicolae",  "Nicolas",  "Nidhish",  "Nihaal",  "Nihal",  "Nikash",  "Nikhil",  "Niki",  "Nikita",  "Nikodem",  
"Nikolai",  "Nikos",  "Nilav",  "Niraj",  "Niro",  "Niven",  "Noah",  "Noel",  "Nolan",  "Noor",  "Norman",  
"Norrie",  "Nuada",  "Nyah",  "Oakley",  "Oban",  "Obieluem",  "Obosa",  "Odhran",  "Odin",  "Odynn",  "Ogheneochuko",  
"Ogheneruno",  "Ohran",  "Oilibhear",  "Oisin",  "Ojima-Ojo",  "Okeoghene",  "Olaf",  "Ola-Oluwa",  "Olaoluwapolorimi",  
"Ole",  "Olie",  "Oliver",  "Olivier",  "Oliwier",  "Ollie",  "Olurotimi",  "Oluwadamilare",  "Oluwadamiloju",  
"Oluwafemi",  "Oluwafikunayomi",  "Oluwalayomi",  "Oluwatobiloba",  "Oluwatoni",  "Omar",  "Omri",  "Oran",  "Orin",  
"Orlando",  "Orley",  "Orran",  "Orrick",  "Orrin",  "Orson",  "Oryn",  "Oscar",  "Osesenagha",  "Oskar",  "Ossian",  
"Oswald",  "Otto",  "Owain",  "Owais",  "Owen",  "Owyn",  "Oz",  "Ozzy",  "Pablo",  "Pacey",  "Padraig",  "Paolo",  
"Pardeepraj",  "Parkash",  "Parker",  "Pascoe",  "Pasquale",  "Patrick",  "Patrick-John",  "Patrikas",  "Patryk",  
"Paul",  "Pavit",  "Pawel",  "Pawlo",  "Pearce",  "Pearse",  "Pearsen",  "Pedram",  "Pedro",  "Peirce",  "Peiyan",  
"Pele",  "Peni",  "Peregrine",  "Peter",  "Phani",  "Philip",  "Philippos",  "Phinehas",  "Phoenix",  "Phoevos",  
"Pierce",  "Pierre-Antoine",  "Pieter",  "Pietro",  "Piotr",  "Porter",  "Prabhjoit",  "Prabodhan",  "Praise",  
"Pranav",  "Pravin",  "Precious",  "Prentice",  "Presley",  "Preston",  "Preston-Jay",  "Prinay",  "Prince",  
"Prithvi",  "Promise",  "Puneetpaul",  "Pushkar",  "Qasim",  "Qirui",  "Quinlan",  "Quinn",  "Radmiras",  "Raees",  
"Raegan",  "Rafael",  "Rafal",  "Rafferty",  "Rafi",  "Raheem",  "Rahil",  "Rahim",  "Rahman",  "Raith",  "Raithin",  
"Raja",  "Rajab-Ali",  "Rajan",  "Ralfs",  "Ralph",  "Ramanas",  "Ramit",  "Ramone",  "Ramsay",  "Ramsey",  "Rana",  
"Ranolph",  "Raphael",  "Rasmus",  "Rasul",  "Raul",  "Raunaq",  "Ravin",  "Ray",  "Rayaan",  "Rayan",  "Rayane",  
"Rayden",  "Rayhan",  "Raymond",  "Rayne",  "Rayyan",  "Raza",  "Reace",  "Reagan",  "Reean",  "Reece",  "Reed",  
"Reegan",  "Rees",  "Reese",  "Reeve",  "Regan",  "Regean",  "Reggie",  "Rehaan",  "Rehan",  "Reice",  "Reid",  
"Reigan",  "Reilly",  "Reily",  "Reis",  "Reiss",  "Remigiusz",  "Remo",  "Remy",  "Ren",  "Renars",  "Reng",  
"Rennie",  "Reno",  "Reo",  "Reuben",  "Rexford",  "Reynold",  "Rhein",  "Rheo",  "Rhett",  "Rheyden",  "Rhian",  
"Rhoan",  "Rholmark",  "Rhoridh",  "Rhuairidh",  "Rhuan",  "Rhuaridh",  "Rhudi",  "Rhy",  "Rhyan",  "Rhyley",  
"Rhyon",  "Rhys",  "Rhys-Bernard",  "Rhyse",  "Riach",  "Rian",  "Ricards",  "Riccardo",  "Ricco",  "Rice",  "Richard",  
"Richey",  "Richie",  "Ricky",  "Rico",  "Ridley",  "Ridwan",  "Rihab",  "Rihan",  "Rihards",  "Rihonn",  "Rikki",  
"Riley",  "Rio",  "Rioden",  "Rishi",  "Ritchie",  "Rivan",  "Riyadh",  "Riyaj",  "Roan",  "Roark",  "Roary",  "Rob",  
"Robbi",  "Robbie",  "Robbie-lee",  "Robby",  "Robert",  "Robert-Gordon",  "Robertjohn",  "Robi",  "Robin",  "Rocco",  
"Roddy",  "Roderick",  "Rodrigo",  "Roen",  "Rogan",  "Roger",  "Rohaan",  "Rohan",  "Rohin",  "Rohit",  "Rokas",  
"Roman",  "Ronald",  "Ronan",  "Ronan-Benedict",  "Ronin",  "Ronnie",  "Rooke",  "Roray",  "Rori",  "Rorie",  "Rory",  
"Roshan",  "Ross",  "Ross-Andrew",  "Rossi",  "Rowan",  "Rowen",  "Roy",  "Ruadhan",  "Ruaidhri",  "Ruairi",  
"Ruairidh",  "Ruan",  "Ruaraidh",  "Ruari",  "Ruaridh",  "Ruben",  "Rubhan",  "Rubin",  "Rubyn",  "Rudi",  "Rudy",  
"Rufus",  "Rui",  "Ruo",  "Rupert",  "Ruslan",  "Russel",  "Russell",  "Ryaan",  "Ryan",  "Ryan-Lee",  "Ryden",  
"Ryder",  "Ryese",  "Ryhs",  "Rylan",  "Rylay",  "Rylee",  "Ryleigh",  "Ryley",  "Rylie",  "Ryo",  "Ryszard",  "Saad",  
"Sabeen",  "Sachkirat",  "Saffi",  "Saghun",  "Sahaib",  "Sahbian",  "Sahil",  "Saif",  "Saifaddine",  "Saim",  
"Sajid",  "Sajjad",  "Salahudin",  "Salman",  "Salter",  "Salvador",  "Sam",  "Saman",  "Samar",  "Samarjit",  
"Samatar",  "Sambrid",  "Sameer",  "Sami",  "Samir",  "Sami-Ullah",  "Samual",  "Samuel",  "Samuela",  "Samy",  
"Sanaullah",  "Sandro",  "Sandy",  "Sanfur",  "Sanjay",  "Santiago",  "Santino",  "Satveer",  "Saul",  "Saunders",  
"Savin",  "Sayad",  "Sayeed",  "Sayf",  "Scot",  "Scott",  "Scott-Alexander",  "Seaan",  "Seamas",  "Seamus",  "Sean",  
"Seane",  "Sean-James",  "Sean-Paul",  "Sean-Ray",  "Seb",  "Sebastian",  "Sebastien",  "Selasi",  "Seonaidh",  
"Sephiroth",  "Sergei",  "Sergio",  "Seth",  "Sethu",  "Seumas",  "Shaarvin",  "Shadow",  "Shae",  "Shahmir",  
"Shai",  "Shane",  "Shannon",  "Sharland",  "Sharoz",  "Shaughn",  "Shaun",  "Shaunpaul",  "Shaun-Paul",  
"Shaun-Thomas",  "Shaurya",  "Shaw",  "Shawn",  "Shawnpaul",  "Shay",  "Shayaan",  "Shayan",  "Shaye",  "Shayne",  
"Shazil",  "Shea",  "Sheafan",  "Sheigh",  "Shenuk",  "Sher",  "Shergo",  "Sheriff",  "Sherwyn",  "Shiloh",  "Shiraz",  
"Shreeram",  "Shreyas",  "Shyam",  "Siddhant",  "Siddharth",  "Sidharth",  "Sidney",  "Siergiej",  "Silas",  "Simon",  
"Sinai",  "Skye",  "Sofian",  "Sohaib",  "Sohail",  "Soham",  "Sohan",  "Sol",  "Solomon",  "Sonneey",  "Sonni",  
"Sonny",  "Sorley",  "Soul",  "Spencer",  "Spondon",  "Stanislaw",  "Stanley",  "Stefan",  "Stefano",  "Stefin",  
"Stephen",  "Stephenjunior",  "Steve",  "Steven",  "Steven-lee",  "Stevie",  "Stewart",  "Stewarty",  "Strachan",  
"Struan",  "Stuart",  "Su",  "Subhaan",  "Sudais",  "Suheyb",  "Suilven",  "Sukhi",  "Sukhpal",  "Sukhvir",  
"Sulayman",  "Sullivan",  "Sultan",  "Sung",  "Sunny",  "Suraj",  "Surien",  "Sweyn",  "Syed",  "Sylvain",  "Symon",  
"Szymon",  "Tadd",  "Taddy",  "Tadhg",  "Taegan",  "Taegen",  "Tai",  "Tait",  "Taiwo",  "Talha",  "Taliesin",  
"Talon",  "Talorcan",  "Tamar",  "Tamiem",  "Tammam",  "Tanay",  "Tane",  "Tanner",  "Tanvir",  "Tanzeel",  "Taonga",  
"Tarik",  "Tariq-Jay",  "Tate",  "Taylan",  "Taylar",  "Tayler",  "Taylor",  "Taylor-Jay",  "Taylor-Lee",  "Tayo",  
"Tayyab",  "Tayye",  "Tayyib",  "Teagan",  "Tee",  "Teejay",  "Tee-jay",  "Tegan",  "Teighen",  "Teiyib",  "Te-Jay",  
"Temba",  "Teo",  "Teodor",  "Teos",  "Terry",  "Teydren",  "Theo",  "Theodore",  "Thiago",  "Thierry",  "Thom",  
"Thomas",  "Thomas-Jay",  "Thomson",  "Thorben",  "Thorfinn",  "Thrinei",  "Thumbiko",  "Tiago",  "Tian",  "Tiarnan",  
"Tibet",  "Tieran",  "Tiernan",  "Timothy",  "Timucin",  "Tiree",  "Tisloh",  "Titi",  "Titus",  "Tiylar",  "TJ",  
"Tjay",  "T-Jay",  "Tobey",  "Tobi",  "Tobias",  "Tobie",  "Toby",  "Todd",  "Tokinaga",  "Toluwalase",  "Tom",  
"Tomas",  "Tomasz",  "Tommi-Lee",  "Tommy",  "Tomson",  "Tony",  "Torin",  "Torquil",  "Torran",  "Torrin",  "Torsten",  
"Trafford",  "Trai",  "Travis",  "Tre",  "Trent",  "Trey",  "Tristain",  "Tristan",  "Troy",  "Tubagus",  "Turki",  
"Turner",  "Ty",  "Ty-Alexander",  "Tye",  "Tyelor",  "Tylar",  "Tyler",  "Tyler-James",  "Tyler-Jay",  "Tyllor",  
"Tylor",  "Tymom",  "Tymon",  "Tymoteusz",  "Tyra",  "Tyree",  "Tyrnan",  "Tyrone",  "Tyson",  "Ubaid",  "Ubayd",  
"Uchenna",  "Uilleam",  "Umair",  "Umar",  "Umer",  "Umut",  "Urban",  "Uri",  "Usman",  "Uzair",  "Uzayr",  "Valen",  
"Valentin",  "Valentino",  "Valery",  "Valo",  "Vasyl",  "Vedantsinh",  "Veeran",  "Victor",  "Victory",  "Vinay",  
"Vince",  "Vincent",  "Vincenzo",  "Vinh",  "Vinnie",  "Vithujan",  "Vladimir",  "Vladislav",  "Vrishin",  
"Vuyolwethu",  "Wabuya",  "Wai",  "Walid",  "Wallace",  "Walter",  "Waqaas",  "Warkhas",  "Warren",  "Warrick",  
"Wasif",  "Wayde",  "Wayne",  "Wei",  "Wen",  "Wesley",  "Wesley-Scott",  "Wiktor",  "Wilkie",  "Will",  "William",  
"William-John",  "Willum",  "Wilson",  "Windsor",  "Wojciech",  "Woyenbrakemi",  "Wyatt",  "Wylie",  "Wynn",  "Xabier",  
"Xander",  "Xavier",  "Xiao",  "Xida",  "Xin",  "Xue",  "Yadgor",  "Yago",  "Yahya",  "Yakup",  "Yang",  "Yanick",  
"Yann",  "Yannick",  "Yaseen",  "Yasin",  "Yasir",  "Yassin",  "Yoji",  "Yong",  "Yoolgeun",  "Yorgos",  "Youcef",  
"Yousif",  "Youssef",  "Yu",  "Yuanyu",  "Yuri",  "Yusef",  "Yusuf",  "Yves",  "Zaaine",  "Zaak",  "Zac",  "Zach",  
"Zachariah",  "Zacharias",  "Zacharie",  "Zacharius",  "Zachariya",  "Zachary",  "Zachary-Marc",  "Zachery",  "Zack",  
"Zackary",  "Zaid",  "Zain",  "Zaine",  "Zaineddine",  "Zainedin",  "Zak",  "Zakaria",  "Zakariya",  "Zakary",  "Zaki",  
"Zakir",  "Zakk",  "Zamaar",  "Zander",  "Zane",  "Zarran",  "Zayd",  "Zayn",  "Zayne",  "Ze",  "Zechariah",  "Zeek",  
"Zeeshan",  "Zeid",  "Zein",  "Zen",  "Zendel",  "Zenith",  "Zennon",  "Zeph",  "Zerah",  "Zhen",  "Zhi",  "Zhong",  
"Zhuo",  "Zi",  "Zidane",  "Zijie",  "Zinedine",  "Zion",  "Zishan",  "Ziya",  "Ziyaan",  "Zohaib",  "Zohair",  
"Zoubaeir",  "Zubair",  "Zubayr",  "Zuriel"
];

const monstersData = {
	"0": {
		"name": "cove",
		"monstersCount": 1,
		"monsters": {
			"madman": {
				"name": "Madman",
				"hp": 14,
				"defend": {
					"name": "defend.png",
					"detail": {
						"shadow": {
							"x": -180,
							"y": 380,
							"rotate": "true",
							"cropX": 468,
							"cropY": 35,
							"width": 63,
							"height": 357
						},
						"defend": {
							"x": -195,
							"y": 165,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 464,
							"height": 390
						}						
					}
				},
				"dead": {
					"name": "dead.png",
					"detail": {
						"dead": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 67,
							"width": 323,
							"height": 184
						},
						"shadow": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 2,
							"width": 357,
							"height": 63
						}
					}
				},
				"combat": {
					"name": "combat.png",
					"detail": {
						"shadow": {
							"x": 0,
							"y": 380,
							"rotate": "False",
							"cropX": 142,
							"cropY": 187,
							"width": 357,
							"height": 63
						},
						"left_leg": {
							"x": -115,
							"y": 330,
							"rotate": "False",
							"cropX": 467,
							"cropY": 74,
							"width": 79,
							"height": 111
						},
						"right_leg": {
							"x": -50,
							"y": 353,
							"rotate": "true",
							"cropX": 476,
							"cropY": 8,
							"width": 91,
							"height": 64
						},
						"back_strap": {
							"x": -105,
							"y": 260,
							"rotate": "true",
							"cropX": 319,
							"cropY": 10,
							"width": 155,
							"height": 43
						},
						"pants": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -25,
							"y": 250,
							"rotate": "False",
							"cropX": 217,
							"cropY": 291,
							"width": 233,
							"height": 245
						},						
						"strait_jacket": {
							"x": -35,
							"y": 142,
							"rotate": "False",
							"cropX": 2,
							"cropY": 261,
							"width": 213,
							"height": 275
						},
						"head": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -132,
							"y": 105,
							"rotate": "true",
							"cropX": 142,
							"cropY": 17,
							"width": 175,
							"height": 112
						},
						"jaw": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -110,
							"y": 180,
							"rotate": "true",
							"cropX": 535,
							"cropY": 378,
							"width": 38,
							"height": 52
						},
						"left_sleeve": {
							"x": -159,
							"y": 162,
							"rotate": "true",
							"cropX": 319,
							"cropY": 55,
							"width": 146,
							"height": 74
						},
						"left_arm": {
							"x": -180,
							"y": 152,
							"rotate": "true",
							"cropX": 452,
							"cropY": 432,
							"width": 121,
							"height": 104
						},
						"left_hand": {
							"x": -120,
							"y": 120,
							"rotate": "False",
							"cropX": 501,
							"cropY": 209,
							"width": 46,
							"height": 96
						},
						"right_sleeve": {
							"x": -10,
							"y": 150,
							"rotate": "False",
							"cropX": 452,
							"cropY": 307,
							"width": 81,
							"height": 123
						},
						"right_arm": {
							"x": -113,
							"y": 116,
							"rotate": "true",
							"cropX": 2,
							"cropY": 40,
							"width": 138,
							"height": 219
						},
						"right_strap": {
							"x": -55,
							"y": 140,
							"rotate": "true",
							"cropX": 142,
							"cropY": 131,
							"width": 320,
							"height": 54
						},						
						"left_strap": {
							"x": -155,
							"y": 163,
							"rotate": "true",
							"cropX": 217,
							"cropY": 252,
							"width": 270,
							"height": 37
						},						
						"Front_strap": {
							"x": -105,
							"y": 233,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 62,
							"height": 36 
						}						
					}
				},
				"attack": {
					"count": 2,
					"0": {
						"damage": {
							"max": 100,
							"min": 0
						},
						"anim": {
							"name": "attack_point.png",
							"detail": {
								"attack_point": {
									"x": 10,
									"y": 130,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 590,
									"height": 535
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 594,
									"cropY": 180,
									"width": 63,
									"height": 357
								},
							}
						},
						"fx": {
							"name": "accusation.png",
							"detail": {
								"rim_light": {
									"x": -95,
									"y": 127,
									"rotate": "False",
									"cropX": 1291,
									"cropY": 100,
									"width": 389,
									"height": 278
								},
								"shadow": {
									"x": -286,
									"y": 161,
									"rotate": "true",
									"cropX": 829,
									"cropY": 21,
									"width": 460,
									"height": 357
								},
								
								"tentacle": {
									"x": -190,
									"y": 175,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 825,
									"height": 137
								},
								"glow": {
									"x": -100,
									"y": 150,
									"rotate": "False",
									"cropX": 2,
									"cropY": 141,
									"width": 736,
									"height": 237
								},
							}
						}
					},
					"1": {
						"damage": {
							"max": 4,
							"min": 2
						},
						"anim": {
							"name": "attack_shout.png",
							"detail": {
								"attack_shout": {
									"x": -200,
									"y": 130,
									"rotate": "true",
									"cropX": 2,
									"cropY": 2,
									"width": 536,
									"height": 419
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 540,
									"cropY": 64,
									"width": 63,
									"height": 357
								}
							}
						},
						"fx": {
							"name": "doomsay.png",
							"detail": {
								"glow": {
									"x": -100,
									"y": 30,
									"rotate": "False",
									"cropX": 2,
									"cropY": 45,
									"width": 585,
									"height": 399
								},
								"rim_light": {
									"x": -203,
									"y": 127,
									"rotate": "true",
									"cropX": 1030,
									"cropY": 229,
									"width": 244,
									"height": 215
								},
								"tentacle01": {
									"x": -240,
									"y": 35,
									"rotate": "true",
									"cropX": 1089,
									"cropY": 36,
									"width": 185,
									"height": 191
								},
								"tentacle02_03": {
									"x": -165,
									"y": 40,
									"rotate": "False",
									"cropX": 589,
									"cropY": 227,
									"width": 439,
									"height": 217
								},
								"tentacle04_05": {
									"x": -175,
									"y": 80,
									"rotate": "False",
									"cropX": 589,
									"cropY": 21,
									"width": 498,
									"height": 204
								},
								"tentacle05": {
									"x": -320,
									"y": 80,
									"rotate": "False",
									"cropX": 1276,
									"cropY": 2,
									"width": 152,
									"height": 69
								},
								"tentacle06": {
									"x": -380,
									"y": 150,
									"rotate": "true",
									"cropX": 1276,
									"cropY": 73,
									"width": 152,
									"height": 371
								},
							}
						}
					}
				}
			}
		}
	},
	"1": {
		"name": "crypts",
		"monstersCount": 0,
		"monsters": {
			"madman": {
				"name": "Madman",
				"hp": 14,
				"defend": {
					"name": "defend.png",
					"detail": {
						"shadow": {
							"x": -180,
							"y": 380,
							"rotate": "true",
							"cropX": 468,
							"cropY": 35,
							"width": 63,
							"height": 357
						},
						"defend": {
							"x": -195,
							"y": 165,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 464,
							"height": 390
						}						
					}
				},
				"dead": {
					"name": "dead.png",
					"detail": {
						"dead": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 67,
							"width": 323,
							"height": 184
						},
						"shadow": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 2,
							"width": 357,
							"height": 63
						}
					}
				},
				"combat": {
					"name": "combat.png",
					"detail": {
						"shadow": {
							"x": 0,
							"y": 380,
							"rotate": "False",
							"cropX": 142,
							"cropY": 187,
							"width": 357,
							"height": 63
						},
						"left_leg": {
							"x": -115,
							"y": 330,
							"rotate": "False",
							"cropX": 467,
							"cropY": 74,
							"width": 79,
							"height": 111
						},
						"right_leg": {
							"x": -50,
							"y": 353,
							"rotate": "true",
							"cropX": 476,
							"cropY": 8,
							"width": 91,
							"height": 64
						},
						"back_strap": {
							"x": -105,
							"y": 260,
							"rotate": "true",
							"cropX": 319,
							"cropY": 10,
							"width": 155,
							"height": 43
						},
						"pants": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -25,
							"y": 250,
							"rotate": "False",
							"cropX": 217,
							"cropY": 291,
							"width": 233,
							"height": 245
						},						
						"strait_jacket": {
							"x": -35,
							"y": 142,
							"rotate": "False",
							"cropX": 2,
							"cropY": 261,
							"width": 213,
							"height": 275
						},
						"head": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -132,
							"y": 105,
							"rotate": "true",
							"cropX": 142,
							"cropY": 17,
							"width": 175,
							"height": 112
						},
						"jaw": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -110,
							"y": 180,
							"rotate": "true",
							"cropX": 535,
							"cropY": 378,
							"width": 38,
							"height": 52
						},
						"left_sleeve": {
							"x": -159,
							"y": 162,
							"rotate": "true",
							"cropX": 319,
							"cropY": 55,
							"width": 146,
							"height": 74
						},
						"left_arm": {
							"x": -180,
							"y": 152,
							"rotate": "true",
							"cropX": 452,
							"cropY": 432,
							"width": 121,
							"height": 104
						},
						"left_hand": {
							"x": -120,
							"y": 120,
							"rotate": "False",
							"cropX": 501,
							"cropY": 209,
							"width": 46,
							"height": 96
						},
						"right_sleeve": {
							"x": -10,
							"y": 150,
							"rotate": "False",
							"cropX": 452,
							"cropY": 307,
							"width": 81,
							"height": 123
						},
						"right_arm": {
							"x": -113,
							"y": 116,
							"rotate": "true",
							"cropX": 2,
							"cropY": 40,
							"width": 138,
							"height": 219
						},
						"right_strap": {
							"x": -55,
							"y": 140,
							"rotate": "true",
							"cropX": 142,
							"cropY": 131,
							"width": 320,
							"height": 54
						},						
						"left_strap": {
							"x": -155,
							"y": 163,
							"rotate": "true",
							"cropX": 217,
							"cropY": 252,
							"width": 270,
							"height": 37
						},						
						"Front_strap": {
							"x": -105,
							"y": 233,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 62,
							"height": 36 
						}						
					}
				},
				"attack": {
					"count": 2,
					"0": {
						"damage": {
							"max": 100,
							"min": 0
						},
						"anim": {
							"name": "attack_point.png",
							"detail": {
								"attack_point": {
									"x": 10,
									"y": 130,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 590,
									"height": 535
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 594,
									"cropY": 180,
									"width": 63,
									"height": 357
								},
							}
						},
						"fx": {
							"name": "accusation.png",
							"detail": {
								"rim_light": {
									"x": -95,
									"y": 127,
									"rotate": "False",
									"cropX": 1291,
									"cropY": 100,
									"width": 389,
									"height": 278
								},
								"shadow": {
									"x": -286,
									"y": 161,
									"rotate": "true",
									"cropX": 829,
									"cropY": 21,
									"width": 460,
									"height": 357
								},
								
								"tentacle": {
									"x": -190,
									"y": 175,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 825,
									"height": 137
								},
								"glow": {
									"x": -100,
									"y": 150,
									"rotate": "False",
									"cropX": 2,
									"cropY": 141,
									"width": 736,
									"height": 237
								},
							}
						}
					},
					"1": {
						"damage": {
							"max": 4,
							"min": 2
						},
						"anim": {
							"name": "attack_shout.png",
							"detail": {
								"attack_shout": {
									"x": -200,
									"y": 130,
									"rotate": "true",
									"cropX": 2,
									"cropY": 2,
									"width": 536,
									"height": 419
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 540,
									"cropY": 64,
									"width": 63,
									"height": 357
								}
							}
						},
						"fx": {
							"name": "doomsay.png",
							"detail": {
								"glow": {
									"x": -100,
									"y": 30,
									"rotate": "False",
									"cropX": 2,
									"cropY": 45,
									"width": 585,
									"height": 399
								},
								"rim_light": {
									"x": -203,
									"y": 127,
									"rotate": "true",
									"cropX": 1030,
									"cropY": 229,
									"width": 244,
									"height": 215
								},
								"tentacle01": {
									"x": -240,
									"y": 35,
									"rotate": "true",
									"cropX": 1089,
									"cropY": 36,
									"width": 185,
									"height": 191
								},
								"tentacle02_03": {
									"x": -165,
									"y": 40,
									"rotate": "False",
									"cropX": 589,
									"cropY": 227,
									"width": 439,
									"height": 217
								},
								"tentacle04_05": {
									"x": -175,
									"y": 80,
									"rotate": "False",
									"cropX": 589,
									"cropY": 21,
									"width": 498,
									"height": 204
								},
								"tentacle05": {
									"x": -320,
									"y": 80,
									"rotate": "False",
									"cropX": 1276,
									"cropY": 2,
									"width": 152,
									"height": 69
								},
								"tentacle06": {
									"x": -380,
									"y": 150,
									"rotate": "true",
									"cropX": 1276,
									"cropY": 73,
									"width": 152,
									"height": 371
								},
							}
						}
					}
				}
			}
		}
	},
	"2": {
		"name": "dungeon1",
		"monstersCount": 0,
		"monsters": {
			"madman": {
				"name": "Madman",
				"hp": 14,
				"defend": {
					"name": "defend.png",
					"detail": {
						"shadow": {
							"x": -180,
							"y": 380,
							"rotate": "true",
							"cropX": 468,
							"cropY": 35,
							"width": 63,
							"height": 357
						},
						"defend": {
							"x": -195,
							"y": 165,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 464,
							"height": 390
						}						
					}
				},
				"dead": {
					"name": "dead.png",
					"detail": {
						"dead": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 67,
							"width": 323,
							"height": 184
						},
						"shadow": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 2,
							"width": 357,
							"height": 63
						}
					}
				},
				"combat": {
					"name": "combat.png",
					"detail": {
						"shadow": {
							"x": 0,
							"y": 380,
							"rotate": "False",
							"cropX": 142,
							"cropY": 187,
							"width": 357,
							"height": 63
						},
						"left_leg": {
							"x": -115,
							"y": 330,
							"rotate": "False",
							"cropX": 467,
							"cropY": 74,
							"width": 79,
							"height": 111
						},
						"right_leg": {
							"x": -50,
							"y": 353,
							"rotate": "true",
							"cropX": 476,
							"cropY": 8,
							"width": 91,
							"height": 64
						},
						"back_strap": {
							"x": -105,
							"y": 260,
							"rotate": "true",
							"cropX": 319,
							"cropY": 10,
							"width": 155,
							"height": 43
						},
						"pants": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -25,
							"y": 250,
							"rotate": "False",
							"cropX": 217,
							"cropY": 291,
							"width": 233,
							"height": 245
						},						
						"strait_jacket": {
							"x": -35,
							"y": 142,
							"rotate": "False",
							"cropX": 2,
							"cropY": 261,
							"width": 213,
							"height": 275
						},
						"head": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -132,
							"y": 105,
							"rotate": "true",
							"cropX": 142,
							"cropY": 17,
							"width": 175,
							"height": 112
						},
						"jaw": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -110,
							"y": 180,
							"rotate": "true",
							"cropX": 535,
							"cropY": 378,
							"width": 38,
							"height": 52
						},
						"left_sleeve": {
							"x": -159,
							"y": 162,
							"rotate": "true",
							"cropX": 319,
							"cropY": 55,
							"width": 146,
							"height": 74
						},
						"left_arm": {
							"x": -180,
							"y": 152,
							"rotate": "true",
							"cropX": 452,
							"cropY": 432,
							"width": 121,
							"height": 104
						},
						"left_hand": {
							"x": -120,
							"y": 120,
							"rotate": "False",
							"cropX": 501,
							"cropY": 209,
							"width": 46,
							"height": 96
						},
						"right_sleeve": {
							"x": -10,
							"y": 150,
							"rotate": "False",
							"cropX": 452,
							"cropY": 307,
							"width": 81,
							"height": 123
						},
						"right_arm": {
							"x": -113,
							"y": 116,
							"rotate": "true",
							"cropX": 2,
							"cropY": 40,
							"width": 138,
							"height": 219
						},
						"right_strap": {
							"x": -55,
							"y": 140,
							"rotate": "true",
							"cropX": 142,
							"cropY": 131,
							"width": 320,
							"height": 54
						},						
						"left_strap": {
							"x": -155,
							"y": 163,
							"rotate": "true",
							"cropX": 217,
							"cropY": 252,
							"width": 270,
							"height": 37
						},						
						"Front_strap": {
							"x": -105,
							"y": 233,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 62,
							"height": 36 
						}						
					}
				},
				"attack": {
					"count": 2,
					"0": {
						"damage": {
							"max": 100,
							"min": 0
						},
						"anim": {
							"name": "attack_point.png",
							"detail": {
								"attack_point": {
									"x": 10,
									"y": 130,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 590,
									"height": 535
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 594,
									"cropY": 180,
									"width": 63,
									"height": 357
								},
							}
						},
						"fx": {
							"name": "accusation.png",
							"detail": {
								"rim_light": {
									"x": -95,
									"y": 127,
									"rotate": "False",
									"cropX": 1291,
									"cropY": 100,
									"width": 389,
									"height": 278
								},
								"shadow": {
									"x": -286,
									"y": 161,
									"rotate": "true",
									"cropX": 829,
									"cropY": 21,
									"width": 460,
									"height": 357
								},
								
								"tentacle": {
									"x": -190,
									"y": 175,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 825,
									"height": 137
								},
								"glow": {
									"x": -100,
									"y": 150,
									"rotate": "False",
									"cropX": 2,
									"cropY": 141,
									"width": 736,
									"height": 237
								},
							}
						}
					},
					"1": {
						"damage": {
							"max": 4,
							"min": 2
						},
						"anim": {
							"name": "attack_shout.png",
							"detail": {
								"attack_shout": {
									"x": -200,
									"y": 130,
									"rotate": "true",
									"cropX": 2,
									"cropY": 2,
									"width": 536,
									"height": 419
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 540,
									"cropY": 64,
									"width": 63,
									"height": 357
								}
							}
						},
						"fx": {
							"name": "doomsay.png",
							"detail": {
								"glow": {
									"x": -100,
									"y": 30,
									"rotate": "False",
									"cropX": 2,
									"cropY": 45,
									"width": 585,
									"height": 399
								},
								"rim_light": {
									"x": -203,
									"y": 127,
									"rotate": "true",
									"cropX": 1030,
									"cropY": 229,
									"width": 244,
									"height": 215
								},
								"tentacle01": {
									"x": -240,
									"y": 35,
									"rotate": "true",
									"cropX": 1089,
									"cropY": 36,
									"width": 185,
									"height": 191
								},
								"tentacle02_03": {
									"x": -165,
									"y": 40,
									"rotate": "False",
									"cropX": 589,
									"cropY": 227,
									"width": 439,
									"height": 217
								},
								"tentacle04_05": {
									"x": -175,
									"y": 80,
									"rotate": "False",
									"cropX": 589,
									"cropY": 21,
									"width": 498,
									"height": 204
								},
								"tentacle05": {
									"x": -320,
									"y": 80,
									"rotate": "False",
									"cropX": 1276,
									"cropY": 2,
									"width": 152,
									"height": 69
								},
								"tentacle06": {
									"x": -380,
									"y": 150,
									"rotate": "true",
									"cropX": 1276,
									"cropY": 73,
									"width": 152,
									"height": 371
								},
							}
						}
					}
				}
			}
		}
	},
	"3": {
		"name": "dungeon2",
		"monstersCount": 0,
		"monsters": {
			"madman": {
				"name": "Madman",
				"hp": 14,
				"defend": {
					"name": "defend.png",
					"detail": {
						"shadow": {
							"x": -180,
							"y": 380,
							"rotate": "true",
							"cropX": 468,
							"cropY": 35,
							"width": 63,
							"height": 357
						},
						"defend": {
							"x": -195,
							"y": 165,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 464,
							"height": 390
						}						
					}
				},
				"dead": {
					"name": "dead.png",
					"detail": {
						"dead": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 67,
							"width": 323,
							"height": 184
						},
						"shadow": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 2,
							"width": 357,
							"height": 63
						}
					}
				},
				"combat": {
					"name": "combat.png",
					"detail": {
						"shadow": {
							"x": 0,
							"y": 380,
							"rotate": "False",
							"cropX": 142,
							"cropY": 187,
							"width": 357,
							"height": 63
						},
						"left_leg": {
							"x": -115,
							"y": 330,
							"rotate": "False",
							"cropX": 467,
							"cropY": 74,
							"width": 79,
							"height": 111
						},
						"right_leg": {
							"x": -50,
							"y": 353,
							"rotate": "true",
							"cropX": 476,
							"cropY": 8,
							"width": 91,
							"height": 64
						},
						"back_strap": {
							"x": -105,
							"y": 260,
							"rotate": "true",
							"cropX": 319,
							"cropY": 10,
							"width": 155,
							"height": 43
						},
						"pants": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -25,
							"y": 250,
							"rotate": "False",
							"cropX": 217,
							"cropY": 291,
							"width": 233,
							"height": 245
						},						
						"strait_jacket": {
							"x": -35,
							"y": 142,
							"rotate": "False",
							"cropX": 2,
							"cropY": 261,
							"width": 213,
							"height": 275
						},
						"head": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -132,
							"y": 105,
							"rotate": "true",
							"cropX": 142,
							"cropY": 17,
							"width": 175,
							"height": 112
						},
						"jaw": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -110,
							"y": 180,
							"rotate": "true",
							"cropX": 535,
							"cropY": 378,
							"width": 38,
							"height": 52
						},
						"left_sleeve": {
							"x": -159,
							"y": 162,
							"rotate": "true",
							"cropX": 319,
							"cropY": 55,
							"width": 146,
							"height": 74
						},
						"left_arm": {
							"x": -180,
							"y": 152,
							"rotate": "true",
							"cropX": 452,
							"cropY": 432,
							"width": 121,
							"height": 104
						},
						"left_hand": {
							"x": -120,
							"y": 120,
							"rotate": "False",
							"cropX": 501,
							"cropY": 209,
							"width": 46,
							"height": 96
						},
						"right_sleeve": {
							"x": -10,
							"y": 150,
							"rotate": "False",
							"cropX": 452,
							"cropY": 307,
							"width": 81,
							"height": 123
						},
						"right_arm": {
							"x": -113,
							"y": 116,
							"rotate": "true",
							"cropX": 2,
							"cropY": 40,
							"width": 138,
							"height": 219
						},
						"right_strap": {
							"x": -55,
							"y": 140,
							"rotate": "true",
							"cropX": 142,
							"cropY": 131,
							"width": 320,
							"height": 54
						},						
						"left_strap": {
							"x": -155,
							"y": 163,
							"rotate": "true",
							"cropX": 217,
							"cropY": 252,
							"width": 270,
							"height": 37
						},						
						"Front_strap": {
							"x": -105,
							"y": 233,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 62,
							"height": 36 
						}						
					}
				},
				"attack": {
					"count": 2,
					"0": {
						"damage": {
							"max": 100,
							"min": 0
						},
						"anim": {
							"name": "attack_point.png",
							"detail": {
								"attack_point": {
									"x": 10,
									"y": 130,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 590,
									"height": 535
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 594,
									"cropY": 180,
									"width": 63,
									"height": 357
								},
							}
						},
						"fx": {
							"name": "accusation.png",
							"detail": {
								"rim_light": {
									"x": -95,
									"y": 127,
									"rotate": "False",
									"cropX": 1291,
									"cropY": 100,
									"width": 389,
									"height": 278
								},
								"shadow": {
									"x": -286,
									"y": 161,
									"rotate": "true",
									"cropX": 829,
									"cropY": 21,
									"width": 460,
									"height": 357
								},
								
								"tentacle": {
									"x": -190,
									"y": 175,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 825,
									"height": 137
								},
								"glow": {
									"x": -100,
									"y": 150,
									"rotate": "False",
									"cropX": 2,
									"cropY": 141,
									"width": 736,
									"height": 237
								},
							}
						}
					},
					"1": {
						"damage": {
							"max": 4,
							"min": 2
						},
						"anim": {
							"name": "attack_shout.png",
							"detail": {
								"attack_shout": {
									"x": -200,
									"y": 130,
									"rotate": "true",
									"cropX": 2,
									"cropY": 2,
									"width": 536,
									"height": 419
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 540,
									"cropY": 64,
									"width": 63,
									"height": 357
								}
							}
						},
						"fx": {
							"name": "doomsay.png",
							"detail": {
								"glow": {
									"x": -100,
									"y": 30,
									"rotate": "False",
									"cropX": 2,
									"cropY": 45,
									"width": 585,
									"height": 399
								},
								"rim_light": {
									"x": -203,
									"y": 127,
									"rotate": "true",
									"cropX": 1030,
									"cropY": 229,
									"width": 244,
									"height": 215
								},
								"tentacle01": {
									"x": -240,
									"y": 35,
									"rotate": "true",
									"cropX": 1089,
									"cropY": 36,
									"width": 185,
									"height": 191
								},
								"tentacle02_03": {
									"x": -165,
									"y": 40,
									"rotate": "False",
									"cropX": 589,
									"cropY": 227,
									"width": 439,
									"height": 217
								},
								"tentacle04_05": {
									"x": -175,
									"y": 80,
									"rotate": "False",
									"cropX": 589,
									"cropY": 21,
									"width": 498,
									"height": 204
								},
								"tentacle05": {
									"x": -320,
									"y": 80,
									"rotate": "False",
									"cropX": 1276,
									"cropY": 2,
									"width": 152,
									"height": 69
								},
								"tentacle06": {
									"x": -380,
									"y": 150,
									"rotate": "true",
									"cropX": 1276,
									"cropY": 73,
									"width": 152,
									"height": 371
								},
							}
						}
					}
				}
			}
		}
	},
	"4": {
		"name": "dungeon3",
		"monstersCount": 0,
		"monsters": {
			"madman": {
				"name": "Madman",
				"hp": 14,
				"defend": {
					"name": "defend.png",
					"detail": {
						"shadow": {
							"x": -180,
							"y": 380,
							"rotate": "true",
							"cropX": 468,
							"cropY": 35,
							"width": 63,
							"height": 357
						},
						"defend": {
							"x": -195,
							"y": 165,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 464,
							"height": 390
						}						
					}
				},
				"dead": {
					"name": "dead.png",
					"detail": {
						"dead": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 67,
							"width": 323,
							"height": 184
						},
						"shadow": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 2,
							"width": 357,
							"height": 63
						}
					}
				},
				"combat": {
					"name": "combat.png",
					"detail": {
						"shadow": {
							"x": 0,
							"y": 380,
							"rotate": "False",
							"cropX": 142,
							"cropY": 187,
							"width": 357,
							"height": 63
						},
						"left_leg": {
							"x": -115,
							"y": 330,
							"rotate": "False",
							"cropX": 467,
							"cropY": 74,
							"width": 79,
							"height": 111
						},
						"right_leg": {
							"x": -50,
							"y": 353,
							"rotate": "true",
							"cropX": 476,
							"cropY": 8,
							"width": 91,
							"height": 64
						},
						"back_strap": {
							"x": -105,
							"y": 260,
							"rotate": "true",
							"cropX": 319,
							"cropY": 10,
							"width": 155,
							"height": 43
						},
						"pants": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -25,
							"y": 250,
							"rotate": "False",
							"cropX": 217,
							"cropY": 291,
							"width": 233,
							"height": 245
						},						
						"strait_jacket": {
							"x": -35,
							"y": 142,
							"rotate": "False",
							"cropX": 2,
							"cropY": 261,
							"width": 213,
							"height": 275
						},
						"head": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -132,
							"y": 105,
							"rotate": "true",
							"cropX": 142,
							"cropY": 17,
							"width": 175,
							"height": 112
						},
						"jaw": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -110,
							"y": 180,
							"rotate": "true",
							"cropX": 535,
							"cropY": 378,
							"width": 38,
							"height": 52
						},
						"left_sleeve": {
							"x": -159,
							"y": 162,
							"rotate": "true",
							"cropX": 319,
							"cropY": 55,
							"width": 146,
							"height": 74
						},
						"left_arm": {
							"x": -180,
							"y": 152,
							"rotate": "true",
							"cropX": 452,
							"cropY": 432,
							"width": 121,
							"height": 104
						},
						"left_hand": {
							"x": -120,
							"y": 120,
							"rotate": "False",
							"cropX": 501,
							"cropY": 209,
							"width": 46,
							"height": 96
						},
						"right_sleeve": {
							"x": -10,
							"y": 150,
							"rotate": "False",
							"cropX": 452,
							"cropY": 307,
							"width": 81,
							"height": 123
						},
						"right_arm": {
							"x": -113,
							"y": 116,
							"rotate": "true",
							"cropX": 2,
							"cropY": 40,
							"width": 138,
							"height": 219
						},
						"right_strap": {
							"x": -55,
							"y": 140,
							"rotate": "true",
							"cropX": 142,
							"cropY": 131,
							"width": 320,
							"height": 54
						},						
						"left_strap": {
							"x": -155,
							"y": 163,
							"rotate": "true",
							"cropX": 217,
							"cropY": 252,
							"width": 270,
							"height": 37
						},						
						"Front_strap": {
							"x": -105,
							"y": 233,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 62,
							"height": 36 
						}						
					}
				},
				"attack": {
					"count": 2,
					"0": {
						"damage": {
							"max": 100,
							"min": 0
						},
						"anim": {
							"name": "attack_point.png",
							"detail": {
								"attack_point": {
									"x": 10,
									"y": 130,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 590,
									"height": 535
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 594,
									"cropY": 180,
									"width": 63,
									"height": 357
								},
							}
						},
						"fx": {
							"name": "accusation.png",
							"detail": {
								"rim_light": {
									"x": -95,
									"y": 127,
									"rotate": "False",
									"cropX": 1291,
									"cropY": 100,
									"width": 389,
									"height": 278
								},
								"shadow": {
									"x": -286,
									"y": 161,
									"rotate": "true",
									"cropX": 829,
									"cropY": 21,
									"width": 460,
									"height": 357
								},
								
								"tentacle": {
									"x": -190,
									"y": 175,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 825,
									"height": 137
								},
								"glow": {
									"x": -100,
									"y": 150,
									"rotate": "False",
									"cropX": 2,
									"cropY": 141,
									"width": 736,
									"height": 237
								},
							}
						}
					},
					"1": {
						"damage": {
							"max": 4,
							"min": 2
						},
						"anim": {
							"name": "attack_shout.png",
							"detail": {
								"attack_shout": {
									"x": -200,
									"y": 130,
									"rotate": "true",
									"cropX": 2,
									"cropY": 2,
									"width": 536,
									"height": 419
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 540,
									"cropY": 64,
									"width": 63,
									"height": 357
								}
							}
						},
						"fx": {
							"name": "doomsay.png",
							"detail": {
								"glow": {
									"x": -100,
									"y": 30,
									"rotate": "False",
									"cropX": 2,
									"cropY": 45,
									"width": 585,
									"height": 399
								},
								"rim_light": {
									"x": -203,
									"y": 127,
									"rotate": "true",
									"cropX": 1030,
									"cropY": 229,
									"width": 244,
									"height": 215
								},
								"tentacle01": {
									"x": -240,
									"y": 35,
									"rotate": "true",
									"cropX": 1089,
									"cropY": 36,
									"width": 185,
									"height": 191
								},
								"tentacle02_03": {
									"x": -165,
									"y": 40,
									"rotate": "False",
									"cropX": 589,
									"cropY": 227,
									"width": 439,
									"height": 217
								},
								"tentacle04_05": {
									"x": -175,
									"y": 80,
									"rotate": "False",
									"cropX": 589,
									"cropY": 21,
									"width": 498,
									"height": 204
								},
								"tentacle05": {
									"x": -320,
									"y": 80,
									"rotate": "False",
									"cropX": 1276,
									"cropY": 2,
									"width": 152,
									"height": 69
								},
								"tentacle06": {
									"x": -380,
									"y": 150,
									"rotate": "true",
									"cropX": 1276,
									"cropY": 73,
									"width": 152,
									"height": 371
								},
							}
						}
					}
				}
			}
		}
	},
	"5": {
		"name": "town",
		"monstersCount": 0,
		"monsters": {
			"madman": {
				"name": "Madman",
				"hp": 14,
				"defend": {
					"name": "defend.png",
					"detail": {
						"shadow": {
							"x": -180,
							"y": 380,
							"rotate": "true",
							"cropX": 468,
							"cropY": 35,
							"width": 63,
							"height": 357
						},
						"defend": {
							"x": -195,
							"y": 165,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 464,
							"height": 390
						}						
					}
				},
				"dead": {
					"name": "dead.png",
					"detail": {
						"dead": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 67,
							"width": 323,
							"height": 184
						},
						"shadow": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 2,
							"width": 357,
							"height": 63
						}
					}
				},
				"combat": {
					"name": "combat.png",
					"detail": {
						"shadow": {
							"x": 0,
							"y": 380,
							"rotate": "False",
							"cropX": 142,
							"cropY": 187,
							"width": 357,
							"height": 63
						},
						"left_leg": {
							"x": -115,
							"y": 330,
							"rotate": "False",
							"cropX": 467,
							"cropY": 74,
							"width": 79,
							"height": 111
						},
						"right_leg": {
							"x": -50,
							"y": 353,
							"rotate": "true",
							"cropX": 476,
							"cropY": 8,
							"width": 91,
							"height": 64
						},
						"back_strap": {
							"x": -105,
							"y": 260,
							"rotate": "true",
							"cropX": 319,
							"cropY": 10,
							"width": 155,
							"height": 43
						},
						"pants": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -25,
							"y": 250,
							"rotate": "False",
							"cropX": 217,
							"cropY": 291,
							"width": 233,
							"height": 245
						},						
						"strait_jacket": {
							"x": -35,
							"y": 142,
							"rotate": "False",
							"cropX": 2,
							"cropY": 261,
							"width": 213,
							"height": 275
						},
						"head": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -132,
							"y": 105,
							"rotate": "true",
							"cropX": 142,
							"cropY": 17,
							"width": 175,
							"height": 112
						},
						"jaw": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -110,
							"y": 180,
							"rotate": "true",
							"cropX": 535,
							"cropY": 378,
							"width": 38,
							"height": 52
						},
						"left_sleeve": {
							"x": -159,
							"y": 162,
							"rotate": "true",
							"cropX": 319,
							"cropY": 55,
							"width": 146,
							"height": 74
						},
						"left_arm": {
							"x": -180,
							"y": 152,
							"rotate": "true",
							"cropX": 452,
							"cropY": 432,
							"width": 121,
							"height": 104
						},
						"left_hand": {
							"x": -120,
							"y": 120,
							"rotate": "False",
							"cropX": 501,
							"cropY": 209,
							"width": 46,
							"height": 96
						},
						"right_sleeve": {
							"x": -10,
							"y": 150,
							"rotate": "False",
							"cropX": 452,
							"cropY": 307,
							"width": 81,
							"height": 123
						},
						"right_arm": {
							"x": -113,
							"y": 116,
							"rotate": "true",
							"cropX": 2,
							"cropY": 40,
							"width": 138,
							"height": 219
						},
						"right_strap": {
							"x": -55,
							"y": 140,
							"rotate": "true",
							"cropX": 142,
							"cropY": 131,
							"width": 320,
							"height": 54
						},						
						"left_strap": {
							"x": -155,
							"y": 163,
							"rotate": "true",
							"cropX": 217,
							"cropY": 252,
							"width": 270,
							"height": 37
						},						
						"Front_strap": {
							"x": -105,
							"y": 233,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 62,
							"height": 36 
						}						
					}
				},
				"attack": {
					"count": 2,
					"0": {
						"damage": {
							"max": 100,
							"min": 0
						},
						"anim": {
							"name": "attack_point.png",
							"detail": {
								"attack_point": {
									"x": 10,
									"y": 130,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 590,
									"height": 535
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 594,
									"cropY": 180,
									"width": 63,
									"height": 357
								},
							}
						},
						"fx": {
							"name": "accusation.png",
							"detail": {
								"rim_light": {
									"x": -95,
									"y": 127,
									"rotate": "False",
									"cropX": 1291,
									"cropY": 100,
									"width": 389,
									"height": 278
								},
								"shadow": {
									"x": -286,
									"y": 161,
									"rotate": "true",
									"cropX": 829,
									"cropY": 21,
									"width": 460,
									"height": 357
								},
								
								"tentacle": {
									"x": -190,
									"y": 175,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 825,
									"height": 137
								},
								"glow": {
									"x": -100,
									"y": 150,
									"rotate": "False",
									"cropX": 2,
									"cropY": 141,
									"width": 736,
									"height": 237
								},
							}
						}
					},
					"1": {
						"damage": {
							"max": 4,
							"min": 2
						},
						"anim": {
							"name": "attack_shout.png",
							"detail": {
								"attack_shout": {
									"x": -200,
									"y": 130,
									"rotate": "true",
									"cropX": 2,
									"cropY": 2,
									"width": 536,
									"height": 419
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 540,
									"cropY": 64,
									"width": 63,
									"height": 357
								}
							}
						},
						"fx": {
							"name": "doomsay.png",
							"detail": {
								"glow": {
									"x": -100,
									"y": 30,
									"rotate": "False",
									"cropX": 2,
									"cropY": 45,
									"width": 585,
									"height": 399
								},
								"rim_light": {
									"x": -203,
									"y": 127,
									"rotate": "true",
									"cropX": 1030,
									"cropY": 229,
									"width": 244,
									"height": 215
								},
								"tentacle01": {
									"x": -240,
									"y": 35,
									"rotate": "true",
									"cropX": 1089,
									"cropY": 36,
									"width": 185,
									"height": 191
								},
								"tentacle02_03": {
									"x": -165,
									"y": 40,
									"rotate": "False",
									"cropX": 589,
									"cropY": 227,
									"width": 439,
									"height": 217
								},
								"tentacle04_05": {
									"x": -175,
									"y": 80,
									"rotate": "False",
									"cropX": 589,
									"cropY": 21,
									"width": 498,
									"height": 204
								},
								"tentacle05": {
									"x": -320,
									"y": 80,
									"rotate": "False",
									"cropX": 1276,
									"cropY": 2,
									"width": 152,
									"height": 69
								},
								"tentacle06": {
									"x": -380,
									"y": 150,
									"rotate": "true",
									"cropX": 1276,
									"cropY": 73,
									"width": 152,
									"height": 371
								},
							}
						}
					}
				}
			}
		}
	},
	"6": {
		"name": "warrens",
		"monstersCount": 0,
		"monsters": {
			"madman": {
				"name": "Madman",
				"hp": 14,
				"defend": {
					"name": "defend.png",
					"detail": {
						"shadow": {
							"x": -180,
							"y": 380,
							"rotate": "true",
							"cropX": 468,
							"cropY": 35,
							"width": 63,
							"height": 357
						},
						"defend": {
							"x": -195,
							"y": 165,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 464,
							"height": 390
						}						
					}
				},
				"dead": {
					"name": "dead.png",
					"detail": {
						"dead": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 67,
							"width": 323,
							"height": 184
						},
						"shadow": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 2,
							"width": 357,
							"height": 63
						}
					}
				},
				"combat": {
					"name": "combat.png",
					"detail": {
						"shadow": {
							"x": 0,
							"y": 380,
							"rotate": "False",
							"cropX": 142,
							"cropY": 187,
							"width": 357,
							"height": 63
						},
						"left_leg": {
							"x": -115,
							"y": 330,
							"rotate": "False",
							"cropX": 467,
							"cropY": 74,
							"width": 79,
							"height": 111
						},
						"right_leg": {
							"x": -50,
							"y": 353,
							"rotate": "true",
							"cropX": 476,
							"cropY": 8,
							"width": 91,
							"height": 64
						},
						"back_strap": {
							"x": -105,
							"y": 260,
							"rotate": "true",
							"cropX": 319,
							"cropY": 10,
							"width": 155,
							"height": 43
						},
						"pants": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -25,
							"y": 250,
							"rotate": "False",
							"cropX": 217,
							"cropY": 291,
							"width": 233,
							"height": 245
						},						
						"strait_jacket": {
							"x": -35,
							"y": 142,
							"rotate": "False",
							"cropX": 2,
							"cropY": 261,
							"width": 213,
							"height": 275
						},
						"head": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -132,
							"y": 105,
							"rotate": "true",
							"cropX": 142,
							"cropY": 17,
							"width": 175,
							"height": 112
						},
						"jaw": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -110,
							"y": 180,
							"rotate": "true",
							"cropX": 535,
							"cropY": 378,
							"width": 38,
							"height": 52
						},
						"left_sleeve": {
							"x": -159,
							"y": 162,
							"rotate": "true",
							"cropX": 319,
							"cropY": 55,
							"width": 146,
							"height": 74
						},
						"left_arm": {
							"x": -180,
							"y": 152,
							"rotate": "true",
							"cropX": 452,
							"cropY": 432,
							"width": 121,
							"height": 104
						},
						"left_hand": {
							"x": -120,
							"y": 120,
							"rotate": "False",
							"cropX": 501,
							"cropY": 209,
							"width": 46,
							"height": 96
						},
						"right_sleeve": {
							"x": -10,
							"y": 150,
							"rotate": "False",
							"cropX": 452,
							"cropY": 307,
							"width": 81,
							"height": 123
						},
						"right_arm": {
							"x": -113,
							"y": 116,
							"rotate": "true",
							"cropX": 2,
							"cropY": 40,
							"width": 138,
							"height": 219
						},
						"right_strap": {
							"x": -55,
							"y": 140,
							"rotate": "true",
							"cropX": 142,
							"cropY": 131,
							"width": 320,
							"height": 54
						},						
						"left_strap": {
							"x": -155,
							"y": 163,
							"rotate": "true",
							"cropX": 217,
							"cropY": 252,
							"width": 270,
							"height": 37
						},						
						"Front_strap": {
							"x": -105,
							"y": 233,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 62,
							"height": 36 
						}						
					}
				},
				"attack": {
					"count": 2,
					"0": {
						"damage": {
							"max": 100,
							"min": 0
						},
						"anim": {
							"name": "attack_point.png",
							"detail": {
								"attack_point": {
									"x": 10,
									"y": 130,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 590,
									"height": 535
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 594,
									"cropY": 180,
									"width": 63,
									"height": 357
								},
							}
						},
						"fx": {
							"name": "accusation.png",
							"detail": {
								"rim_light": {
									"x": -95,
									"y": 127,
									"rotate": "False",
									"cropX": 1291,
									"cropY": 100,
									"width": 389,
									"height": 278
								},
								"shadow": {
									"x": -286,
									"y": 161,
									"rotate": "true",
									"cropX": 829,
									"cropY": 21,
									"width": 460,
									"height": 357
								},
								
								"tentacle": {
									"x": -190,
									"y": 175,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 825,
									"height": 137
								},
								"glow": {
									"x": -100,
									"y": 150,
									"rotate": "False",
									"cropX": 2,
									"cropY": 141,
									"width": 736,
									"height": 237
								},
							}
						}
					},
					"1": {
						"damage": {
							"max": 4,
							"min": 2
						},
						"anim": {
							"name": "attack_shout.png",
							"detail": {
								"attack_shout": {
									"x": -200,
									"y": 130,
									"rotate": "true",
									"cropX": 2,
									"cropY": 2,
									"width": 536,
									"height": 419
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 540,
									"cropY": 64,
									"width": 63,
									"height": 357
								}
							}
						},
						"fx": {
							"name": "doomsay.png",
							"detail": {
								"glow": {
									"x": -100,
									"y": 30,
									"rotate": "False",
									"cropX": 2,
									"cropY": 45,
									"width": 585,
									"height": 399
								},
								"rim_light": {
									"x": -203,
									"y": 127,
									"rotate": "true",
									"cropX": 1030,
									"cropY": 229,
									"width": 244,
									"height": 215
								},
								"tentacle01": {
									"x": -240,
									"y": 35,
									"rotate": "true",
									"cropX": 1089,
									"cropY": 36,
									"width": 185,
									"height": 191
								},
								"tentacle02_03": {
									"x": -165,
									"y": 40,
									"rotate": "False",
									"cropX": 589,
									"cropY": 227,
									"width": 439,
									"height": 217
								},
								"tentacle04_05": {
									"x": -175,
									"y": 80,
									"rotate": "False",
									"cropX": 589,
									"cropY": 21,
									"width": 498,
									"height": 204
								},
								"tentacle05": {
									"x": -320,
									"y": 80,
									"rotate": "False",
									"cropX": 1276,
									"cropY": 2,
									"width": 152,
									"height": 69
								},
								"tentacle06": {
									"x": -380,
									"y": 150,
									"rotate": "true",
									"cropX": 1276,
									"cropY": 73,
									"width": 152,
									"height": 371
								},
							}
						}
					}
				}
			}
		}
	},
	"7": {
		"name": "weald",
		"monstersCount": 0,
		"monsters": {
			"madman": {
				"name": "Madman",
				"hp": 14,
				"defend": {
					"name": "defend.png",
					"detail": {
						"shadow": {
							"x": -180,
							"y": 380,
							"rotate": "true",
							"cropX": 468,
							"cropY": 35,
							"width": 63,
							"height": 357
						},
						"defend": {
							"x": -195,
							"y": 165,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 464,
							"height": 390
						}						
					}
				},
				"dead": {
					"name": "dead.png",
					"detail": {
						"dead": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 67,
							"width": 323,
							"height": 184
						},
						"shadow": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 2,
							"width": 357,
							"height": 63
						}
					}
				},
				"combat": {
					"name": "combat.png",
					"detail": {
						"shadow": {
							"x": 0,
							"y": 380,
							"rotate": "False",
							"cropX": 142,
							"cropY": 187,
							"width": 357,
							"height": 63
						},
						"left_leg": {
							"x": -115,
							"y": 330,
							"rotate": "False",
							"cropX": 467,
							"cropY": 74,
							"width": 79,
							"height": 111
						},
						"right_leg": {
							"x": -50,
							"y": 353,
							"rotate": "true",
							"cropX": 476,
							"cropY": 8,
							"width": 91,
							"height": 64
						},
						"back_strap": {
							"x": -105,
							"y": 260,
							"rotate": "true",
							"cropX": 319,
							"cropY": 10,
							"width": 155,
							"height": 43
						},
						"pants": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -25,
							"y": 250,
							"rotate": "False",
							"cropX": 217,
							"cropY": 291,
							"width": 233,
							"height": 245
						},						
						"strait_jacket": {
							"x": -35,
							"y": 142,
							"rotate": "False",
							"cropX": 2,
							"cropY": 261,
							"width": 213,
							"height": 275
						},
						"head": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -132,
							"y": 105,
							"rotate": "true",
							"cropX": 142,
							"cropY": 17,
							"width": 175,
							"height": 112
						},
						"jaw": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -110,
							"y": 180,
							"rotate": "true",
							"cropX": 535,
							"cropY": 378,
							"width": 38,
							"height": 52
						},
						"left_sleeve": {
							"x": -159,
							"y": 162,
							"rotate": "true",
							"cropX": 319,
							"cropY": 55,
							"width": 146,
							"height": 74
						},
						"left_arm": {
							"x": -180,
							"y": 152,
							"rotate": "true",
							"cropX": 452,
							"cropY": 432,
							"width": 121,
							"height": 104
						},
						"left_hand": {
							"x": -120,
							"y": 120,
							"rotate": "False",
							"cropX": 501,
							"cropY": 209,
							"width": 46,
							"height": 96
						},
						"right_sleeve": {
							"x": -10,
							"y": 150,
							"rotate": "False",
							"cropX": 452,
							"cropY": 307,
							"width": 81,
							"height": 123
						},
						"right_arm": {
							"x": -113,
							"y": 116,
							"rotate": "true",
							"cropX": 2,
							"cropY": 40,
							"width": 138,
							"height": 219
						},
						"right_strap": {
							"x": -55,
							"y": 140,
							"rotate": "true",
							"cropX": 142,
							"cropY": 131,
							"width": 320,
							"height": 54
						},						
						"left_strap": {
							"x": -155,
							"y": 163,
							"rotate": "true",
							"cropX": 217,
							"cropY": 252,
							"width": 270,
							"height": 37
						},						
						"Front_strap": {
							"x": -105,
							"y": 233,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 62,
							"height": 36 
						}						
					}
				},
				"attack": {
					"count": 2,
					"0": {
						"damage": {
							"max": 100,
							"min": 0
						},
						"anim": {
							"name": "attack_point.png",
							"detail": {
								"attack_point": {
									"x": 10,
									"y": 130,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 590,
									"height": 535
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 594,
									"cropY": 180,
									"width": 63,
									"height": 357
								},
							}
						},
						"fx": {
							"name": "accusation.png",
							"detail": {
								"rim_light": {
									"x": -95,
									"y": 127,
									"rotate": "False",
									"cropX": 1291,
									"cropY": 100,
									"width": 389,
									"height": 278
								},
								"shadow": {
									"x": -286,
									"y": 161,
									"rotate": "true",
									"cropX": 829,
									"cropY": 21,
									"width": 460,
									"height": 357
								},
								
								"tentacle": {
									"x": -190,
									"y": 175,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 825,
									"height": 137
								},
								"glow": {
									"x": -100,
									"y": 150,
									"rotate": "False",
									"cropX": 2,
									"cropY": 141,
									"width": 736,
									"height": 237
								},
							}
						}
					},
					"1": {
						"damage": {
							"max": 4,
							"min": 2
						},
						"anim": {
							"name": "attack_shout.png",
							"detail": {
								"attack_shout": {
									"x": -200,
									"y": 130,
									"rotate": "true",
									"cropX": 2,
									"cropY": 2,
									"width": 536,
									"height": 419
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 540,
									"cropY": 64,
									"width": 63,
									"height": 357
								}
							}
						},
						"fx": {
							"name": "doomsay.png",
							"detail": {
								"glow": {
									"x": -100,
									"y": 30,
									"rotate": "False",
									"cropX": 2,
									"cropY": 45,
									"width": 585,
									"height": 399
								},
								"rim_light": {
									"x": -203,
									"y": 127,
									"rotate": "true",
									"cropX": 1030,
									"cropY": 229,
									"width": 244,
									"height": 215
								},
								"tentacle01": {
									"x": -240,
									"y": 35,
									"rotate": "true",
									"cropX": 1089,
									"cropY": 36,
									"width": 185,
									"height": 191
								},
								"tentacle02_03": {
									"x": -165,
									"y": 40,
									"rotate": "False",
									"cropX": 589,
									"cropY": 227,
									"width": 439,
									"height": 217
								},
								"tentacle04_05": {
									"x": -175,
									"y": 80,
									"rotate": "False",
									"cropX": 589,
									"cropY": 21,
									"width": 498,
									"height": 204
								},
								"tentacle05": {
									"x": -320,
									"y": 80,
									"rotate": "False",
									"cropX": 1276,
									"cropY": 2,
									"width": 152,
									"height": 69
								},
								"tentacle06": {
									"x": -380,
									"y": 150,
									"rotate": "true",
									"cropX": 1276,
									"cropY": 73,
									"width": 152,
									"height": 371
								},
							}
						}
					}
				}
			}
		}
	},
	"8": {
		"name": "courtyard",
		"monstersCount": 0,
		"monsters": {
			"madman": {
				"name": "Madman",
				"hp": 14,
				"defend": {
					"name": "defend.png",
					"detail": {
						"shadow": {
							"x": -180,
							"y": 380,
							"rotate": "true",
							"cropX": 468,
							"cropY": 35,
							"width": 63,
							"height": 357
						},
						"defend": {
							"x": -195,
							"y": 165,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 464,
							"height": 390
						}						
					}
				},
				"dead": {
					"name": "dead.png",
					"detail": {
						"dead": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 67,
							"width": 323,
							"height": 184
						},
						"shadow": {
							"x": 0,
							"y": 0,
							"rotate": "False",
							"cropX": 2,
							"cropY": 2,
							"width": 357,
							"height": 63
						}
					}
				},
				"combat": {
					"name": "combat.png",
					"detail": {
						"shadow": {
							"x": 0,
							"y": 380,
							"rotate": "False",
							"cropX": 142,
							"cropY": 187,
							"width": 357,
							"height": 63
						},
						"left_leg": {
							"x": -115,
							"y": 330,
							"rotate": "False",
							"cropX": 467,
							"cropY": 74,
							"width": 79,
							"height": 111
						},
						"right_leg": {
							"x": -50,
							"y": 353,
							"rotate": "true",
							"cropX": 476,
							"cropY": 8,
							"width": 91,
							"height": 64
						},
						"back_strap": {
							"x": -105,
							"y": 260,
							"rotate": "true",
							"cropX": 319,
							"cropY": 10,
							"width": 155,
							"height": 43
						},
						"pants": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -25,
							"y": 250,
							"rotate": "False",
							"cropX": 217,
							"cropY": 291,
							"width": 233,
							"height": 245
						},						
						"strait_jacket": {
							"x": -35,
							"y": 142,
							"rotate": "False",
							"cropX": 2,
							"cropY": 261,
							"width": 213,
							"height": 275
						},
						"head": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -132,
							"y": 105,
							"rotate": "true",
							"cropX": 142,
							"cropY": 17,
							"width": 175,
							"height": 112
						},
						"jaw": {
							"animation": {
		 						"name": "rotate",
		 						"amplitude": 0.06
		 					},
							"x": -110,
							"y": 180,
							"rotate": "true",
							"cropX": 535,
							"cropY": 378,
							"width": 38,
							"height": 52
						},
						"left_sleeve": {
							"x": -159,
							"y": 162,
							"rotate": "true",
							"cropX": 319,
							"cropY": 55,
							"width": 146,
							"height": 74
						},
						"left_arm": {
							"x": -180,
							"y": 152,
							"rotate": "true",
							"cropX": 452,
							"cropY": 432,
							"width": 121,
							"height": 104
						},
						"left_hand": {
							"x": -120,
							"y": 120,
							"rotate": "False",
							"cropX": 501,
							"cropY": 209,
							"width": 46,
							"height": 96
						},
						"right_sleeve": {
							"x": -10,
							"y": 150,
							"rotate": "False",
							"cropX": 452,
							"cropY": 307,
							"width": 81,
							"height": 123
						},
						"right_arm": {
							"x": -113,
							"y": 116,
							"rotate": "true",
							"cropX": 2,
							"cropY": 40,
							"width": 138,
							"height": 219
						},
						"right_strap": {
							"x": -55,
							"y": 140,
							"rotate": "true",
							"cropX": 142,
							"cropY": 131,
							"width": 320,
							"height": 54
						},						
						"left_strap": {
							"x": -155,
							"y": 163,
							"rotate": "true",
							"cropX": 217,
							"cropY": 252,
							"width": 270,
							"height": 37
						},						
						"Front_strap": {
							"x": -105,
							"y": 233,
							"rotate": "true",
							"cropX": 2,
							"cropY": 2,
							"width": 62,
							"height": 36 
						}						
					}
				},
				"attack": {
					"count": 2,
					"0": {
						"damage": {
							"max": 100,
							"min": 0
						},
						"anim": {
							"name": "attack_point.png",
							"detail": {
								"attack_point": {
									"x": 10,
									"y": 130,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 590,
									"height": 535
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 594,
									"cropY": 180,
									"width": 63,
									"height": 357
								},
							}
						},
						"fx": {
							"name": "accusation.png",
							"detail": {
								"rim_light": {
									"x": -95,
									"y": 127,
									"rotate": "False",
									"cropX": 1291,
									"cropY": 100,
									"width": 389,
									"height": 278
								},
								"shadow": {
									"x": -286,
									"y": 161,
									"rotate": "true",
									"cropX": 829,
									"cropY": 21,
									"width": 460,
									"height": 357
								},
								
								"tentacle": {
									"x": -190,
									"y": 175,
									"rotate": "False",
									"cropX": 2,
									"cropY": 2,
									"width": 825,
									"height": 137
								},
								"glow": {
									"x": -100,
									"y": 150,
									"rotate": "False",
									"cropX": 2,
									"cropY": 141,
									"width": 736,
									"height": 237
								},
							}
						}
					},
					"1": {
						"damage": {
							"max": 4,
							"min": 2
						},
						"anim": {
							"name": "attack_shout.png",
							"detail": {
								"attack_shout": {
									"x": -200,
									"y": 130,
									"rotate": "true",
									"cropX": 2,
									"cropY": 2,
									"width": 536,
									"height": 419
								},
								"shadow": {
									"x": -200,
									"y": 380,
									"rotate": "true",
									"cropX": 540,
									"cropY": 64,
									"width": 63,
									"height": 357
								}
							}
						},
						"fx": {
							"name": "doomsay.png",
							"detail": {
								"glow": {
									"x": -100,
									"y": 30,
									"rotate": "False",
									"cropX": 2,
									"cropY": 45,
									"width": 585,
									"height": 399
								},
								"rim_light": {
									"x": -203,
									"y": 127,
									"rotate": "true",
									"cropX": 1030,
									"cropY": 229,
									"width": 244,
									"height": 215
								},
								"tentacle01": {
									"x": -240,
									"y": 35,
									"rotate": "true",
									"cropX": 1089,
									"cropY": 36,
									"width": 185,
									"height": 191
								},
								"tentacle02_03": {
									"x": -165,
									"y": 40,
									"rotate": "False",
									"cropX": 589,
									"cropY": 227,
									"width": 439,
									"height": 217
								},
								"tentacle04_05": {
									"x": -175,
									"y": 80,
									"rotate": "False",
									"cropX": 589,
									"cropY": 21,
									"width": 498,
									"height": 204
								},
								"tentacle05": {
									"x": -320,
									"y": 80,
									"rotate": "False",
									"cropX": 1276,
									"cropY": 2,
									"width": 152,
									"height": 69
								},
								"tentacle06": {
									"x": -380,
									"y": 150,
									"rotate": "true",
									"cropX": 1276,
									"cropY": 73,
									"width": 152,
									"height": 371
								},
							}
						}
					}
				}
			}
		}
	}
};

export { monstersData as data };
export { adjectives as adjectives };
export { names as names };