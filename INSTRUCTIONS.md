# Network Assets Import Application [CODE CHALLENGE]

## Overview
This application aims to import network assets from a CSV file into a database table, perform validation, handle deduplication, and post the imported assets to an external API. 

## Application Structure
The application comprises several modules:
- `main_v1.py`: The main script to initiate the import process and execute the functionalities.
- `parse_csv.py`: Contains functions to load the data, validate IP addresses, MD5 serial numbers, and perform data cleansing. (Covering Part 1 of the Challenge)
- `sqlite_db.py`: Manages the SQLite database operations like setup, insertion, and deduplication. (Covering Part 2 of the Challenge)
- `post_data.py`: Handles posting data to an external API endpoint. (Covering Part 3 of the challenge)
- `tests.py`: This file contains the unit tests to validate the functioning of the modules and database.
- `logger_setup.py`: This file configures the basic logging mechanism to trace the working of the app. The logs are not configured to generate on the console as it makes the program slow, hence the logs get generated in a file called app.log
- `ai_ops_main.ipynb`: This is just a rough notebook I had used to try out ideas while desining the structure and the working of the functions and to work with CSV files with ease.

## Instructions to Run the Application

### Prerequisites
- Python 3.x installed.
- Ensure required libraries are installed. Use `pip install -r requirements.txt` to install dependencies.
- Besides built-in packages, I have only used `pandas` and `requests` libraries externally.

### Execution Steps
1. Clone the repository.
2. Place the 'asset_data.csv' file in the same directory as the application files.
3. Open a terminal or command prompt and navigate to the application directory.
4. Run the application by executing the following command:

    ```bash
    python main_v1.py
    ```

5. The application will read 'asset_data.csv', perform validation, insert data into an in-memory SQLite database, and post assets to the API endpoint in chunks of 75.

### Assumptions
- The CSV file should follow the structure similar to the provided 'example.csv'.
- IP addresses and serial numbers are validated according to IPv4 and MD5 hash formats.
- The program assumes clean values except for IP addresses column, which might contain missing data.
- The database setup is handled internally and operates with SQLite in-memory storage.
- The API endpoint accepts a specific payload structure and can handle chunks of 75 assets.

### Logs and Outputs
- The application logs all activities to provide information about successful operations and potential errors. Logs are available in the file 'app.txt'.

### Note
- The application assumes a command-line interface and does not include a graphical user interface.

## Credits
This application was developed by Abhimanyu Sangitrao.