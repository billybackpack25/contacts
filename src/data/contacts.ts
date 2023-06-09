export type ContactListType = {
  id: string;
  createdAt: string;
  email: string;
  last_name: string;
  first_name: string;
  country_code: string;
  contact_picture: string;
  is_favourite: boolean;
  phone_number: string;
};

export const contacts: ContactListType[] = [
  {
    createdAt: '2023-03-18T16:30:32.212Z',
    email: 'Georgianna62@hotmail.com',
    last_name: 'Lemke',
    first_name: 'Santos',
    country_code: '+44',
    contact_picture: '',
    is_favourite: false,
    phone_number: '301-313-3883',
    id: '1',
  },
  {
    createdAt: '2023-03-18T16:55:08.209Z',
    email: 'Emmy.Leannon3@yahoo.com',
    last_name: 'Schiller',
    first_name: 'Gardner',
    country_code: '+44',
    contact_picture: '',
    is_favourite: false,
    phone_number: '771-703-9367',
    id: '2',
  },
  {
    createdAt: '2023-03-19T09:04:18.262Z',
    email: 'Clifton31@hotmail.com',
    last_name: 'Howell',
    first_name: 'Hardy',
    country_code: '+44',
    contact_picture: 'https://api.lorem.space/image/face?h=300',
    is_favourite: false,
    phone_number: '623-923-5107',
    id: '3',
  },
  {
    createdAt: '2023-03-19T10:17:09.166Z',
    email: 'Janiya_Balistreri@yahoo.com',
    last_name: 'Prohaska',
    first_name: 'Titus',
    country_code: '+44',
    contact_picture: '',
    is_favourite: false,
    phone_number: '275-590-5248 x0550',
    id: '4',
  },
  {
    createdAt: '2023-03-18T23:10:17.316Z',
    email: 'Jasmin.Hirthe@hotmail.com',
    last_name: 'Bahringer',
    first_name: 'Ludwig',
    country_code: '+44',
    contact_picture: 'https://api.lorem.space/image/face?h=310',
    is_favourite: false,
    phone_number: '694-216-3537 x36202',
    id: '5',
  },
  {
    createdAt: '2023-03-19T01:01:31.864Z',
    email: 'Kavon_Herman@yahoo.com',
    last_name: 'Dicki',
    first_name: 'Celestino',
    country_code: '+44',
    contact_picture: '',
    is_favourite: false,
    phone_number: '1-710-930-4295 x060',
    id: '6',
  },
  {
    createdAt: '2023-03-19T10:11:54.785Z',
    email: 'Gene_Metz9@yahoo.com',
    last_name: 'Zboncak',
    first_name: 'Collin',
    country_code: '+44',
    contact_picture: 'https://api.lorem.space/image/face?h=320',
    is_favourite: false,
    phone_number: '423-776-1374 x96309',
    id: '7',
  },
  {
    createdAt: '2023-03-18T18:01:11.379Z',
    email: 'Vella67@yahoo.com',
    last_name: 'Walter',
    first_name: 'Karley',
    country_code: '+44',
    contact_picture: 'https://api.lorem.space/image/face?h=305',
    is_favourite: false,
    phone_number: '775.523.7634',
    id: '8',
  },
  {
    createdAt: '2023-03-19T06:21:15.228Z',
    email: 'Destini.Borer23@yahoo.com',
    last_name: 'Hoeger',
    first_name: 'Joesph',
    country_code: '+44',
    contact_picture: '',
    is_favourite: false,
    phone_number: '1-217-480-4780 x9564',
    id: '9',
  },
  // {
  //   createdAt: '2023-03-18T20:30:41.390Z',
  //   email: 'Torrey_Waters11@yahoo.com',
  //   last_name: 'Nolan',
  //   first_name: 'Lia',
  //   country_code: '+44',
  //   contact_picture: 'https://api.lorem.space/image/face?h=300',
  //   is_favourite: false,
  //   phone_number: '1-200-386-1357 x65296',
  //   id: '10',
  // },
  // {
  //   createdAt: '2023-03-18T18:09:26.359Z',
  //   email: 'Brielle_Balistreri@yahoo.com',
  //   last_name: 'Klocko',
  //   first_name: 'Elfrieda',
  //   country_code: '+44',
  //   contact_picture: '',
  //   is_favourite: false,
  //   phone_number: '706-310-4085',
  //   id: '11',
  // },
  // {
  //   createdAt: '2023-03-19T12:12:26.717Z',
  //   email: 'Dayton_Zboncak@gmail.com',
  //   last_name: 'Gutmann',
  //   first_name: 'Matteo',
  //   country_code: '+44',
  //   contact_picture: 'https://api.lorem.space/image/face?h=300',
  //   is_favourite: false,
  //   phone_number: '1-433-449-6756 x848',
  //   id: '12',
  // },
  // {
  //   createdAt: '2023-03-19T01:01:59.250Z',
  //   email: 'Thelma_Mueller99@yahoo.com',
  //   last_name: 'Bauch',
  //   first_name: 'Beau',
  //   country_code: '+44',
  //   contact_picture: 'https://api.lorem.space/image/face?h=300',
  //   is_favourite: false,
  //   phone_number: '(874) 876-1015 x87252',
  //   id: '13',
  // },
  // {
  //   createdAt: '2023-03-19T15:04:54.081Z',
  //   email: 'Michele_Corwin@gmail.com',
  //   last_name: 'Grimes',
  //   first_name: 'Polly',
  //   country_code: '+44',
  //   contact_picture: '',
  //   is_favourite: false,
  //   phone_number: '819.464.2540 x0864',
  //   id: '14',
  // },
  // {
  //   createdAt: '2023-03-19T03:17:59.235Z',
  //   email: 'Payton_Jacobi@gmail.com',
  //   last_name: 'Powlowski',
  //   first_name: 'Lowell',
  //   country_code: '+44',
  //   contact_picture: '',
  //   is_favourite: false,
  //   phone_number: '1-430-349-4092',
  //   id: '15',
  // },
  // {
  //   createdAt: '2023-03-19T00:37:22.008Z',
  //   email: 'Idell.Heathcote@hotmail.com',
  //   last_name: 'Schamberger',
  //   first_name: 'Edythe',
  //   country_code: '+44',
  //   contact_picture: '',
  //   is_favourite: false,
  //   phone_number: '586.290.9840 x284',
  //   id: '16',
  // },
].sort((a, b) => (a.first_name > b.first_name ? 1 : -1));

export default contacts;
