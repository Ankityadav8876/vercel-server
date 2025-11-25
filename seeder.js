const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const College = require('./models/College');

dotenv.config();
connectDB();

const colleges = [
  {
    name: 'University of Jammu',
    location: 'Jammu, J&K',
    description: 'A state university offering various undergraduate and postgraduate courses.',
    courses: ['Engineering', 'Arts', 'Science', 'Commerce'],
    website: 'https://jammuuniversity.ac.in/',
  },
  {
    name: 'National Institute of Technology Srinagar',
    location: 'Srinagar, J&K',
    description: 'An autonomous public engineering and research institution located in Srinagar.',
    courses: ['Civil Engineering', 'Electrical Engineering', 'Computer Science Engineering'],
    website: 'http://nitsri.ac.in/',
  },
  {
    name: 'Cluster University of Jammu',
    location: 'Jammu, J&K',
    description: 'A group of colleges offering integrated and postgraduate courses.',
    courses: ['Science', 'Arts', 'Commerce', 'Education'],
    website: 'https://clujammu.in/',
  },
  {
    name: 'Islamic University of Science & Technology',
    location: 'Awantipora, J&K',
    description: 'A university focusing on science, engineering, and technology.',
    courses: ['Engineering', 'Management', 'Sciences'],
    website: 'https://www.iust.ac.in/',
  },
  {
    name: 'Sher-e-Kashmir University of Agricultural Sciences and Technology of Kashmir',
    location: 'Srinagar, J&K',
    description: 'A university dedicated to agricultural education and research.',
    courses: ['Agriculture', 'Horticulture', 'Forestry', 'Veterinary Sciences'],
    website: 'https://skuastkashmir.ac.in/',
  },
];

const importData = async () => {
  try {
    await College.deleteMany();
    await College.insertMany(colleges);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await College.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}