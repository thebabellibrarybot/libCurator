# Library Archives Frontend Application

This is a React frontend application that provides researchers with the ability to create, share, and visualize personally curated collections of library archives. The application fetches data from an API, which is dockerized in another linked repository. It also utilizes the D3 library to graphically represent the library data.

![SVG Image](libCurator/public/book.svg)

## Features

- Create and manage personally curated collections of library archives
- Share collections with other researchers
- Visualize library data using D3 graphs

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Install dependencies:

```bash
cd library-archives-frontend
npm install
```

3. Start the development server:

```bash
npm start
```

The application should now be running on `http://localhost:3000`.

## Configuration

The application uses a local json file in the application to substitute any calls that would otherwise need to be make to the API that can be found at in [this repo]'https://github.com/thebabellibrarybot/MorganAPi'

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.

2. Sign up or log in to your account.

3. Create a new collection by providing the required information.

4. Browse the available library archives and add them to your collection.

5. Share your collection with other researchers by providing them with the unique URL.

6. Visualize the library data in your collection using the provided D3 graphs.

## Dependencies

This project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- D3: A JavaScript library for manipulating documents based on data.
- Axios: A promise-based HTTP client for making API requests.
- React Router: A routing library for React applications.
- React Bootstrap: A React implementation of the Bootstrap UI framework.

For a complete list of dependencies and their versions, please refer to the `package.json` file.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).