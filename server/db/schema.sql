SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP DATABASE IF EXISTS `Dogs`;
CREATE DATABASE Dogs;
USE Dogs;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE IF NOT EXISTS Users (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'stores a human being';

DROP TABLE IF EXISTS `FaveDogs`;
CREATE TABLE IF NOT EXISTS FaveDogs (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `age` VARCHAR(30) NULL DEFAULT NULL,
  `breeds` TEXT NULL DEFAULT NULL,   -- breeds object is converted to string via JSON.stringify
  `address1` VARCHAR(30) NULL DEFAULT NULL, -- contact object has been separated into multiple fields
  `address2` VARCHAR(30) NULL DEFAULT NULL,
  `city` VARCHAR(30) NULL DEFAULT NULL,
  `email` VARCHAR(30) NULL DEFAULT NULL,
  `fax` VARCHAR(30) NULL DEFAULT NULL,
  `phone` VARCHAR(30) NULL DEFAULT NULL,
  `state` VARCHAR(30) NULL DEFAULT NULL,
  `zip` VARCHAR(30) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `dog_id` VARCHAR(30) NULL DEFAULT NULL UNIQUE,
  `media` TEXT NULL DEFAULT NULL,    -- media object is converted to string via JSON.stringify
  `mix` VARCHAR(30) NULL DEFAULT NULL,
  `name` VARCHAR(30) NULL DEFAULT NULL,
  `options` TEXT NULL DEFAULT NULL,  -- options object is converted to string via JSON.stringify
  `sex` VARCHAR(30) NULL DEFAULT NULL,
  `shelterId` VARCHAR(30) NULL DEFAULT NULL,
  `shelterPetId` VARCHAR(30) NULL DEFAULT NULL,
  `size` VARCHAR(30) NULL DEFAULT NULL,
  `status` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'stores a whole dog';

DROP TABLE IF EXISTS `Users_FaveDogs`;
CREATE TABLE IF NOT EXISTS Users_FaveDogs (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NULL DEFAULT NULL,
  `dog_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'join table that matches one user_id to one dog_id';

CREATE TABLE IF NOT EXISTS `breeds` (
  `id` INT(20) NOT NULL AUTO_INCREMENT,
  `breed` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
  `weight_avg` INT(20) DEFAULT NULL,
  `shedding` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `grooming` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `exercise` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `biddability` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prey_drive` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `barking` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img` VARCHAR(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- SAVE DATA RETRIEVED BY PREVIOUS GROUP:
INSERT INTO `breeds` (`id`, `breed`, `weight_avg`, `shedding`, `grooming`, `exercise`, `biddability`, `prey_drive`, `barking`, `img`) VALUES
(1, 'Airedale Terrier', 49, 'low', 'moderate-professional', 'moderate', 'low', 'high', 'high', 'https://images.dog.ceo/breeds/airedale/n02096051_6855.jpg'),
(2, 'Akita', 100, 'high-seasonal', 'moderate', 'moderate', 'low', 'high', 'high', 'https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg'),
(3, 'Alaskan Malamute', 85, 'high-seasonal', '(except during sheds)', 'high', 'low', 'high', 'high', 'https://images.dog.ceo/breeds/malamute/n02110063_6518.jpg'),
(4, 'American Bulldog', 72, 'moderate', 'low', 'high', 'moderate', 'moderate', 'high', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Scott_type_American_Bulldog.jpg/220px-Scot'),
(5, 'American Eskimo Dog', 24, 'high-seasonal', 'moderate', 'moderate', 'moderate', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/eskimo/n02109961_5924.jpg'),
(6, 'American Staffordshire Terrier', 62, 'moderate', 'low', 'high', 'high', 'high', 'low', 'https://images.dog.ceo/breeds/terrier-american/n02093428_9797.jpg'),
(7, 'Australian Cattle Dog / Blue Heeler', 40, 'moderate', 'low', 'high', 'high', 'high', 'moderate', 'https://www.petfinder.com/images/breeds/dog/1010.jpg'),
(8, 'Australian Kelpie', 38, 'high', 'low', 'high', 'high', 'moderate', 'moderate', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12191716/Australian-Kelpi'),
(9, 'Australian Shepherd', 48, 'high', 'moderate', 'high', 'high', 'moderate', 'high', 'https://www.petfinder.com/images/breeds/dog/1020.jpg'),
(10, 'Austrialian Terrier', 13, 'low', 'moderate', 'moderate', 'moderate', 'moderate', 'high', 'https://images.dog.ceo/breeds/terrier-australian/n02096294_574.jpg'),
(11, 'Basenji', 23, 'low', 'low', 'high', 'low', 'high', 'Yodel', 'https://images.dog.ceo/breeds/basenji/n02110806_111.jpg'),
(12, 'Basset Hound', 60, 'moderate', 'Ear care/Skin Folds', 'moderate', 'low', 'moderate', 'high', 'https://images.dog.ceo/breeds/hound-basset/n02088238_9626.jpg'),
(13, 'Beagle', 23, 'moderate', 'low', 'moderate', 'Single-Minded', 'high', 'high', 'https://images.dog.ceo/breeds/beagle/n02088364_14779.jpg'),
(14, 'Beauceron', 80, 'moderate', 'low', 'high', 'high', 'moderate', 'moderate', 'https://vetstreet.brightspotcdn.com/dims4/default/01d51af/2147483647/crop/0x0%2B0%2B0/resize/645x380'),
(15, 'Bedlington Terrier', 20, 'low', 'moderate-professional', 'moderate', 'moderate', 'high', 'high', 'https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1621.jpg'),
(16, 'Belgian Shepherd / Malinois', 55, 'moderate-seasonal', 'Brushing during shedding', 'high', 'high', 'high', 'moderate', 'https://images.dog.ceo/breeds/malinois/n02105162_10640.jpg'),
(17, 'Belgian Shepherd / Tervuren', 55, 'high-seasonal', 'moderate', 'high', 'high', 'high', 'moderate', 'https://www.petfinder.com/images/breeds/dog/1060.jpg'),
(18, 'Bernese Mountain Dog', 102, 'high-seasonal', 'moderate', 'Not Endurance', 'moderate', 'low', 'low', 'https://images.dog.ceo/breeds/mountain-bernese/n02107683_3655.jpg'),
(19, 'Bichon Frise', 15, 'low', 'moderate-professional', 'moderate', 'moderate', 'low', NULL, 'https://www.petfinder.com/images/breeds/dog/1440.jpg'),
(20, 'Black and Tan Coonhound', 56, 'moderate', 'Drool', 'moderate', 'low', 'high', 'high', 'https://images.dog.ceo/breeds/coonhound/n02089078_2270.jpg'),
(21, 'Bloodhound', 103, 'moderate', 'Drool', 'high', 'low', 'moderate', 'high', 'https://images.dog.ceo/breeds/hound-blood/n02088466_7421.jpg'),
(22, 'Bluetick Coonhound', 61, 'moderate', 'low', 'high', 'Intelligent/Stubborn', 'moderate', 'high', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000130/Bluetick-Coonhou'),
(23, 'Boerboel', 150, 'moderate', 'low', 'Lazy, need Stimulation', 'high', 'high', 'moderate', 'http://img.chien.com/img/races-de-chiens/420_big-boerboel-boerbull.jpg'),
(24, 'Border Collie', 36, 'high', 'Some require brushing', 'high', 'high', 'low', 'moderate', 'https://images.dog.ceo/breeds/collie-border/n02106166_1842.jpg'),
(25, 'Border Terrier', 13, 'low', 'Hand Stripping', 'moderate', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/terrier-border/n02093754_1256.jpg'),
(26, 'Bouvier des Flandres', 85, 'low', 'moderate-professional', 'high', 'moderate', 'high', 'high', 'https://images.dog.ceo/breeds/bouvier/n02106382_3014.jpg'),
(27, 'Boxer', 63, 'moderate', 'low', 'high', 'low', 'moderate', 'Vocal', 'https://images.dog.ceo/breeds/boxer/n02108089_6583.jpg'),
(28, 'Boykin Spaniel', 32, 'low', 'moderate-professional', 'high', 'high', 'high', 'low', 'http://boykinspaniel.org/gallery_image/ever.jpg'),
(29, 'Briard', 72, 'moderate', 'moderate-professional', 'high', 'high', 'high', 'moderate', 'https://images.dog.ceo/breeds/briard/n02105251_5677.jpg'),
(30, 'Brittany Spaniel', 35, 'moderate', 'moderate', 'high', 'high', 'high', 'moderate', 'https://www.petfinder.com/images/breeds/dog/1630.jpg'),
(31, 'Bull Terrier', 67, 'moderate', 'low', 'high', 'low', 'high', 'low', 'https://www.petfinder.com/images/breeds/dog/1910.jpg'),
(32, 'Bulldog', 45, 'moderate', 'Facial Cleaning', 'moderate', 'low', 'moderate', 'Snorting', 'https://www.petfinder.com/images/breeds/dog/1460.jpg'),
(33, 'Bullmastiff', 115, 'moderate', 'low', 'moderate', 'moderate', 'moderate', 'Percieved Danger', 'https://www.petfinder.com/images/breeds/dog/2380.jpg'),
(34, 'Cairn Terrier', 12, 'low', 'Hand Stripping', 'moderate', 'low', 'high', NULL, 'https://images.dog.ceo/breeds/cairn/n02096177_9585.jpg'),
(35, 'Cane Corso Mastiff', 99, 'moderate', 'Drool', 'high', 'moderate', 'high', 'low', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235051/Cane-Corso-Histo'),
(36, 'Catahoula Leopard Dog', 72, 'moderate', 'low', 'high', 'moderate', 'high', 'moderate', 'https://www.akc.org/dog-breeds/catahoula-leopard-dog/'),
(37, 'Caucasian Sheepdog / Caucasian Ovtcharka', 105, 'high-seasonal', 'moderate', 'high', 'moderate', 'high', 'moderate', 'https://www.dogbreedinfo.com/caucasianowtcharka.htm'),
(38, 'Cavalier King Charles Spaniel', 16, 'low', 'brushing-professional', 'low', 'moderate', 'low', 'low', 'https://www.petfinder.com/images/breeds/dog/2150.jpg'),
(39, 'Chesapeake Bay Retriever', 63, '_ Twice a Year', 'Brushing during shed', 'high', 'moderate', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3196.jpg'),
(40, 'Chihuahua', 5, 'low', 'moderate', 'low', 'moderate', 'low', 'moderate', 'https://images.dog.ceo/breeds/chihuahua/n02085620_7440.jpg'),
(41, 'Chinese Crested Dog', 12, 'low', 'Skin Care', 'low', 'moderate', 'low', 'low', 'https://www.petfinder.com/images/breeds/dog/2170.jpg'),
(42, 'Chinook', 60, 'high-seasonal', 'Brushing during shed', 'moderate', 'high', '_', 'moderate', 'https://en.wikipedia.org/wiki/Chinook_(dog)'),
(43, 'Chow Chow', 58, 'high-seasonal', 'brushing-professional', 'low', 'low', 'high', 'moderate', 'https://images.dog.ceo/breeds/chow/n02112137_3237.jpg'),
(44, 'Clumber Spaniel', 70, 'moderate', 'brushing-professional', 'low', 'moderate', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/clumber/n02101556_4257.jpg'),
(45, 'Cocker Spaniel', 27, 'low', 'If kept long _', 'moderate', 'high', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_14555.jpg'),
(46, 'Collie', 55, 'moderate', 'low', 'moderate', 'high', 'low', 'high', 'https://www.petfinder.com/images/breeds/dog/1110.jpg'),
(47, 'Coton de Tulear', 10, 'low', 'brushing-professional', 'low', 'high', 'low', 'Potential Vocal', 'https://www.akc.org/dog-breeds/coton-de-tulear/'),
(48, 'Dachshund', 22, 'low', 'low', 'moderate', 'low', 'high', 'moderate', 'https://images.dog.ceo/breeds/dachshund/Miniature_Daschund.jpg'),
(49, 'Dalmatian', 45, 'moderate', 'low', 'high', 'low', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/dalmatian/cooper2.jpg'),
(50, 'Doberman Pinscher', 84, 'moderate', 'low', 'high', 'high', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/doberman/n02107142_5783.jpg'),
(51, 'Dogo Argentino', 92, 'moderate', 'low', 'high', 'moderate', 'high', 'moderate', 'https://adriaticmedianethr.files.wordpress.com/2017/08/dogo-argentino.jpg?quality=100&strip=all&w=67'),
(52, 'Dutch Shepherd', 77, 'high', 'moderate', 'high', 'high', 'high', 'moderate', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12205640/Dutch-Shepherd-H'),
(53, 'English Bulldog', 65, 'moderate', 'low', 'moderate', 'low', 'moderate', 'moderate', 'https://i2.wp.com/comparapet.com.br/wp-content/uploads/2016/02/412ee97e-4919-476d-bf3f-296e1026ee13_'),
(54, 'English Cocker Spaniel', 35, 'moderate', 'Brushing if left long', 'high', 'high', 'high', 'moderate', 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_518.jpg'),
(55, 'English Pointer', 60, 'moderate', 'low', 'moderate', 'moderate', '_', 'moderate', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLP6epNhb4ID_pz4jp1FJKA0cuFL-atwvjBjrMKV1Jj-61'),
(56, 'English Setter', 55, 'moderate', 'brushing-professional', 'high', 'high', 'high', 'moderate', 'https://images.dog.ceo/breeds/setter-english/n02100735_6803.jpg'),
(57, 'English Shepherd', 55, 'high', 'moderate', 'high', 'high', 'moderate', 'high', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Englishshepherd.jpg/220px-Englishshepherd.jpg'),
(58, 'English Springer Spaniel', 42, 'moderate', 'brushing-professional', 'high', 'high', 'high', 'moderate', 'https://images.dog.ceo/breeds/springer-english/n02102040_228.jpg'),
(59, 'English Toy Spaniel', 11, 'moderate', 'brushing-professional', 'low', 'moderate', 'low', 'low', 'https://www.petfinder.com/images/breeds/dog/2180.jpg'),
(60, 'Field Spaniel', 48, 'moderate', 'brushing-professional', 'moderate', 'high', 'high', 'moderate', 'https://www.petfinder.com/images/breeds/dog/1700.jpg'),
(61, 'Finnish Lapphund', 43, 'high-seasonal', 'brushing', 'moderate', 'high', 'moderate', 'high', 'https://4.bp.blogspot.com/-G1gwPeAEW5Q/VzBCr1in3bI/AAAAAAAAEt4/IKDxTUAMVG8fkCwNcaJzgKLcbInjyi60QCLcB'),
(62, 'Finnish Spitz', 24, 'high-seasonal', 'brushing', 'moderate', 'low', 'high', '"King of Barkers"', 'https://www.petfinder.com/images/breeds/dog/1500.jpg'),
(63, 'Flat-Coated Retriever', 66, 'moderate-seasonal', 'brushing-professional', 'high', 'high', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_4098.jpg'),
(64, 'French Bulldog', 22, 'moderate', 'Facial Folds (potentially)', 'low', 'moderate', 'low', 'Snorting', 'https://images.dog.ceo/breeds/bulldog-french/n02108915_3702.jpg'),
(65, 'German Pinscher', 35, 'moderate', 'low', 'high', 'high', 'high', 'moderate', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12233145/German-Pinscher-'),
(66, 'German Shepherd Dog', 69, 'high-seasonal', 'Brushing during shed', 'high', 'high', 'high', 'moderate', 'https://images.dog.ceo/breeds/germanshepherd/n02106662_7960.jpg'),
(67, 'German Shorthaired Pointer', 53, 'moderate', 'low', 'high', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/pointer-german/n02100236_1443.jpg'),
(68, 'Giant Schnauzer', 85, 'low', 'moderate-professional', 'moderate', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1235.jpg'),
(69, 'Glen of Imaal Terrier', 36, 'low', 'Hand Stripping', 'moderate', 'Can be stubborn', 'moderate', 'moderate', 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Wheaten_glen_of_imaal.jpg'),
(70, 'Golden Retriever', 65, 'moderate-seasonal', 'brushing-professional', 'moderate', 'high', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/retriever-golden/n02099601_304.jpg'),
(71, 'Gordon Setter', 58, 'moderate', 'brushing-professional', 'moderate', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/setter-gordon/n02101006_2540.jpg'),
(72, 'Great Dane', 110, 'moderate', 'low', 'Higher in young dogs', 'moderate', 'low', 'moderate', 'https://images.dog.ceo/breeds/dane-great/n02109047_27476.jpg'),
(73, 'Great Pyrenees', 100, 'high-seasonal', 'moderate', 'moderate', 'low', 'moderate', 'high', 'https://images.dog.ceo/breeds/pyrenees/n02111500_6045.jpg'),
(74, 'Greyhound', 69, 'low', 'low', 'low', 'moderate', 'Depends on the Dog', 'low', 'https://images.dog.ceo/breeds/greyhound-italian/n02091032_36.jpg'),
(75, 'Harrier', 55, 'moderate', 'low', 'moderate', 'moderate', 'high', 'high', 'https://www.petfinder.com/images/breeds/dog/1300.jpg'),
(76, 'Havanese', 9, 'low', 'moderate-professional', 'moderate', 'high', 'low', 'moderate', 'https://www.petfinder.com/images/breeds/dog/2190.jpg'),
(77, 'Irish Setter', 62, 'moderate', 'brushing-professional', 'high', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/setter-irish/n02100877_2686.jpg'),
(78, 'Irish Terrier', 26, 'low', 'Hand Stripping', 'high', 'low', 'high', 'high', 'https://images.dog.ceo/breeds/terrier-irish/n02093991_4872.jpg'),
(79, 'Irish Wolfhound', 112, 'moderate', 'moderate', 'moderate', 'moderate', 'high', 'low', 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_2340.jpg'),
(80, 'Italian Greyhound', 10, 'low', 'Dental Care*', 'moderate', 'low', 'high', 'low', 'https://images.dog.ceo/breeds/greyhound-italian/n02091032_8150.jpg'),
(81, 'Italian Spinone', 80, 'low', 'Hand Stripping', 'moderate', 'high', 'high', 'moderate', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Mysko_bringa_2-5ar.jpg'),
(82, 'Jack Russell Terrier (Parson)', 15, 'moderate', 'low', 'high', 'moderate', 'high', 'high', 'https://www.petfinder.com/images/breeds/dog/1950.jpg'),
(83, 'Japanese Chin', 8, 'moderate', 'moderate', 'low', 'moderate', 'low', 'moderate', 'https://www.petfinder.com/images/breeds/dog/2210.jpg'),
(84, 'Keeshond', 39, 'high-seasonal', 'moderate', 'moderate', 'moderate', 'low', 'high', 'https://images.dog.ceo/breeds/keeshond/n02112350_8270.jpg'),
(85, 'Komondor', 110, 'low', '_ or Corded', 'high', 'moderate', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/komondor/n02105505_4090.jpg'),
(86, 'Kuvasz', 93, 'high', 'moderate', 'high', 'low', 'high', 'high', 'https://images.dog.ceo/breeds/kuvasz/n02104029_1779.jpg'),
(87, 'Labrador Retriever', 68, 'high', 'low', 'moderate', 'moderate', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/labrador/n02099712_4913.jpg'),
(88, 'Lancashire Heeler', 19, 'moderate', 'low', 'moderate', 'moderate', 'high', 'moderate', 'http://www.marcthevet.com/wp-content/uploads/2015/07/Lancaheeler.jpg'),
(89, 'Leonberger', 132, 'high-seasonal', 'moderate', 'moderate', 'moderate', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/leonberg/n02111129_1503.jpg'),
(90, 'Lhasa Apso', 14, 'low', 'high-professional', 'low', 'moderate', 'low', 'moderate', 'https://images.dog.ceo/breeds/lhasa/n02098413_17364.jpg'),
(91, 'Maltese', 5, 'low', 'high-professional', 'low', 'moderate', 'low', 'moderate', 'https://images.dog.ceo/breeds/maltese/n02085936_16014.jpg'),
(92, 'Miniature Pinscher', 9, 'moderate', 'low', 'high', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_4234.jpg'),
(93, 'Miniature Schnauzer', 13, 'low', 'moderate-professional', 'moderate', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_6553.jpg'),
(94, 'Newfoundland Dog', 127, 'high-seasonal', 'moderate', 'moderate', 'high', 'low', 'moderate', 'https://images.dog.ceo/breeds/newfoundland/n02111277_3153.jpg'),
(95, 'Norfolk Terrier', 12, 'low', 'Hand Stripping', 'moderate', 'moderate', 'high', 'high', 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_907.jpg'),
(96, 'Norwich Terrier', 12, 'low', 'Hand Stripping', 'moderate', 'moderate', 'high', 'low', 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_2633.jpg'),
(97, 'Nova Scotia Duck Tolling Retriever', 40, 'moderate-seasonal', 'moderate', 'high', 'high', 'high', '"Toller Scream"', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12212948/Nova-Scotia-Duck'),
(98, 'Old English Sheepdog', 95, 'moderate', 'high-professional', 'moderate', 'low', 'low', 'moderate', 'https://images.dog.ceo/breeds/sheepdog-english/n02105641_12889.jpg'),
(99, 'Papillon', 8, 'low', 'moderate', 'moderate', 'high', 'low', 'moderate', 'https://images.dog.ceo/breeds/papillon/n02086910_933.jpg'),
(100, 'Patterdale Terrier / Fell Terrier', 23, 'moderate', 'low', 'high', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/terrier-patterdale/patterdale-terrier-1330018870tnN.jpg'),
(101, 'Pekingese', 11, 'high', 'high', 'low', 'low', 'low', 'Snorting', 'https://images.dog.ceo/breeds/pekinese/n02086079_6712.jpg'),
(102, 'Pharaoh Hound', 50, 'low', 'low', 'high', 'moderate', 'high', 'high', 'https://www.petfinder.com/images/breeds/dog/1360.jpg'),
(103, 'Pit Bull Terrier', 47, 'moderate', 'low', 'high', 'high', 'high', 'low', 'https://upload.wikimedia.org/wikipedia/commons/0/0c/American_Pit_Bull_Terrier_-_Seated.jpg'),
(104, 'Plott Hound', 51, 'moderate', 'low', 'moderate', 'moderate', 'high', 'moderate', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225801/Plott-On-White-0'),
(105, 'Pomeranian', 6, 'moderate', 'moderate-professional', 'low', 'moderate', 'low', 'moderate', 'https://images.dog.ceo/breeds/pomeranian/n02112018_3097.jpg'),
(106, 'Poodle', 16, 'low', 'moderate-professional', 'moderate', 'high', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/poodle-miniature/n02113712_211.jpg'),
(107, 'Portugese Water Dog', 46, 'low', 'moderate-professional', 'moderate', 'high', 'low', 'moderate', 'https://www.petfinder.com/images/breeds/dog/2480.jpg'),
(108, 'Presa Canario', 116, 'moderate', 'low', 'high', 'low', 'moderate', 'moderate', 'http://static.pedigreedatabase.com/dogbreeds/perro_de_presa_canario.jpg'),
(109, 'Pug', 16, 'high', 'Facial Folds (potentially)', 'low', 'moderate', 'low', 'Snorting', 'https://images.dog.ceo/breeds/pug/n02110958_16434.jpg'),
(110, 'Puli', 24, 'low', '_ or Corded', 'high', 'high', 'low', 'moderate', 'https://www.petfinder.com/images/breeds/dog/1140.jpg'),
(111, 'Pumi', 25, 'low', 'moderate-professional', 'moderate', 'moderate', 'moderate', 'moderate', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225316/Pumi-Care-500x75'),
(112, 'Rat Terrier', 17, 'low', 'low', '"Playful but enjoy naps"', 'moderate', 'high', 'moderate', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12210721/Rat-Terrier-Care'),
(113, 'Redbone Coonhound', 29, 'moderate', 'low', 'moderate', 'moderate', 'low', 'high', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225133/Redbone-Coonhoun'),
(114, 'Rhodesian Ridgeback', 78, 'moderate', 'low', 'high', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_7719.jpg'),
(115, 'Rottweiler', 106, 'high', 'low', 'moderate', 'moderate', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/rottweiler/n02106550_4079.jpg'),
(116, 'Saint Bernard / St. Bernard', 180, 'high-seasonal', 'moderate', 'low', 'moderate', '_', 'moderate', 'https://images.dog.ceo/breeds/stbernard/n02109525_11285.jpg'),
(117, 'Saluki', 50, 'low', 'brushing if feathered', 'moderate', 'low', 'high', 'low', 'https://images.dog.ceo/breeds/saluki/n02091831_3594.jpg'),
(118, 'Samoyed', 52, 'high-seasonal', 'moderate', 'high', 'high', 'high', 'high', 'https://images.dog.ceo/breeds/samoyed/n02111889_2361.jpg'),
(119, 'Schipperke', 13, 'moderate-seasonal', 'moderate', 'moderate', 'moderate', 'high', 'high', 'https://images.dog.ceo/breeds/schipperke/n02104365_6199.jpg'),
(120, 'Schnauzer', 42, 'low', 'moderate', 'moderate', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_572.jpg'),
(121, 'Scottish Deerhound', 91, 'moderate', 'Hand Stripping', 'moderate', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_7890.jpg'),
(122, 'Scottish Terrier Scottie', 20, 'low', 'Hand Stripping', 'moderate', 'moderate', 'high', 'low', 'https://images.dog.ceo/breeds/terrier-scottish/n02097298_4565.jpg'),
(123, 'Shar-Pei', 54, 'moderate-seasonal', 'Fold Care', 'moderate', 'moderate', 'low', 'moderate', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Gorda_-_100.jpg/1200px-Gorda_-_100.jpg'),
(124, 'Shetland Sheepdog Sheltie', 18, 'high-seasonal', 'high', 'moderate', 'high', 'moderate', 'high', 'https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_7527.jpg'),
(125, 'Shiba Inu', 20, 'high-seasonal', 'moderate', 'moderate', 'low', 'high', 'Vocal', 'https://images.dog.ceo/breeds/shiba/shiba-5.jpg'),
(126, 'Shih Tzu', 12, 'low', 'high-professional', 'low', 'moderate', 'low', 'moderate', 'https://images.dog.ceo/breeds/shihtzu/n02086240_4629.jpg'),
(127, 'Siberian Husky', 48, 'high-seasonal', 'moderate', 'high', 'low', 'high', 'high', 'https://images.dog.ceo/breeds/husky/n02110185_13704.jpg'),
(128, 'Silky Terrier', 9, 'low', 'moderate-professional', 'moderate', 'moderate', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/terrier-silky/n02097658_4952.jpg'),
(129, 'Smooth Fox Terrier', 16, 'moderate', 'low', 'high', 'moderate', 'high', 'high', 'https://images.dog.ceo/breeds/terrier-fox/n02095314_2372.jpg'),
(130, 'Spanish Water Dog', 40, 'low', 'high-professional', 'high', 'high', 'high', 'moderate', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RoDfydziDRe6nFOhIZXViqniuIu_tnbG2JgeqFYQi7bd'),
(131, 'Spitz', 17, 'high-seasonal', 'moderate', 'moderate', 'moderate', 'moderate', 'moderate', 'https://i1.wp.com/dogloversshow.com.au/directory/wp-content/uploads/sites/4/2016/06/Japanese-Spitz-e'),
(132, 'Staffordshire Bull Terrier', 31, 'moderate', 'low', 'moderate', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_5139.jpg'),
(133, 'Standard Poodle', 55, 'low', 'moderate-professional', 'moderate', 'high', 'low', 'moderate', 'https://images.dog.ceo/breeds/poodle-standard/n02113799_4946.jpg'),
(134, 'Swedish Vallhund', 24, 'high-seasonal', 'Brushing during shed', 'high', 'moderate', 'moderate', 'moderate', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12211633/Swedish-Vallhund'),
(135, 'Thai Ridgeback', 49, 'moderate', 'low', 'moderate', 'high', 'high', 'moderate', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12223626/Thai-Ridgeback-O'),
(136, 'Tibetan Mastiff', 130, 'high-seasonal', 'moderate', 'moderate', 'low', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_4507.jpg'),
(137, 'Tibetan Spaniel', 12, 'moderate', 'moderate-professional', 'moderate', 'moderate', 'low', 'moderate', 'https://www.petfinder.com/images/breeds/dog/1590.jpg'),
(138, 'Tibetan Terrier', 24, 'low', 'high-professional', 'moderate', 'high', 'low', 'moderate', 'https://images.dog.ceo/breeds/terrier-tibetan/n02097474_7227.jpg'),
(139, 'Toy Fox Terrier', 5, 'moderate', 'low', 'moderate', 'high', 'moderate', 'low', 'https://images.dog.ceo/breeds/terrier-toy/n02087046_4809.jpg'),
(140, 'Treeing Walker Coonhound', 55, 'moderate', 'low', 'Mellow at home', 'moderate', 'high', 'high', 'https://www.dogbreedinfo.com/images12/TreeingWalkerCoonhoundtugears.JPG'),
(141, 'Vizsla', 51, 'moderate', 'low', 'high', 'high', 'high', 'moderate', 'https://images.dog.ceo/breeds/vizsla/n02100583_1908.jpg'),
(142, 'Weimaraner', 70, 'moderate', 'low', 'high', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/weimaraner/n02092339_2510.jpg'),
(143, 'Welsh Corgi', 32, 'high-seasonal', 'moderate', 'high', 'high', 'moderate', 'high', 'NULL'),
(144, 'Welsh Corgi', 26, 'high-seasonal', 'Brushing during shed', 'high', 'moderate', 'low', 'high', 'NULL'),
(145, 'Welsh Springer Spaniel', 40, 'moderate', 'moderate-professional', 'moderate', 'high', 'high', 'moderate', 'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_466.jpg'),
(146, 'West Highland White Terrier Westie', 18, 'low', '_ Hand Stripping', 'moderate', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_6041.jpg'),
(147, 'Wheaten Terrier', 40, 'low', 'high-professional', 'high', 'moderate', 'high', 'moderate', 'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1066.jpg'),
(148, 'Whippet', 28, 'low', 'low', 'moderate', 'low', 'high', 'low', 'https://www.petfinder.com/images/breeds/dog/1400.jpg'),
(149, 'White German Shepherd', 72, 'high-seasonal', 'Brushing during shed', 'high', 'high', 'moderate', 'moderate', 'https://animalso.com/wp-content/uploads/2016/12/white-german-shepherd_4.jpg'),
(150, 'Wire Fox Terrier', 16, 'low', 'moderate-professional', 'high', NULL, 'high', 'high', 'https://www.petfinder.com/images/breeds/dog/2120.jpg'),
(151, 'Wirehaired Pointing Griffon', 55, 'low', 'Hand Stripping', 'high', 'high', 'high', 'moderate', 'https://www.petfinder.com/images/breeds/dog/1850.jpg'),
(152, 'Xoloitzcuintle / Mexican Hairless', 25, 'low', 'moderate', 'moderate', 'moderate', 'moderate', 'moderate', 'https://images.dog.ceo/breeds/mexicanhairless/n02113978_593.jpg'),
(153, 'Yorkshire Terrier Yorkie', 5, 'low', 'high-professional', 'moderate', 'moderate', 'moderate', 'high', 'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_7495.jpg');
