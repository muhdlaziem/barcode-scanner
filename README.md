# barcode-scanner

### Group Members (An -Nahlu MBT)
Name                                     | Matric No
---------------------------------------- | :---------:
Muhammad Syafiq Bin Mohd Faudzy `(Leader)` | 1623765
Muhammad Laziem Bin Shafie               | 1621781
Muhamad Amir Syafiq Bin Abd Hadi         | 1629953
Nik Ahmad Faiz Bin Mohd Fauzi            | 1623399
Asif Azamuddin Bin Mohd Jawali           | 1629405



### 1.0 Configuration
Run this for Android Configuration
```
 cd Barcode/
 npm install
```
 
### 2.0 Introduction
QR code is simply method that user can use to visit any particular websites without the need of typing the whole address. Mostly, businesses are using QR codes as a tool for marketing their company. QR code needs QR Scanner or QR Reader to utilize its functionality. There are a lot of QR codes application scanners with variety of features. Even though, there are a lot of QR scanners out there, they do not simply provide a simple and a good user experience. This particluar project is included QR Generator which very convenience for those who wants to create a QR Code.


### 3.0 Objective
1. The main objective for the application is to help user utilizing the QR code simplicity.
2. To create a simple and user friendly application.
3. To help user to save / delete any url that user might want to use in future.
4. To help user generate their own QR Code.
### 4.0 Features and Functionalities
Features
* Barcode/ QR Code Scanner
* QR Code Generator
* Authentication
* Save History

API used
* firebase
* react-native-camera-kit
* react-native-qrcode-svg

Functionalities
* CRUD operation using firebase
* Zoom out/in when using Scanner
* Save generated QR Code
* Saved History aligned with user account
* Copy/Paste/Cut functionalities


### 5.0 Screen Navigation
* API used for navigation
    1. React Navigation Stack
    2. Material Bottom Tab Navigator
    
* Screen
    1. Splash Screen
    
     ![Splash Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/images/fdssfds.jpg)
    
    User will be prompted with splash screen when they open the application.
    _____________________
    2. Login Page
    
     ![Login Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/images/Login.jpg)
    
    User need to sign in before the Home Page is prompted. If user does not have any account, they need to click to Sign Up button to be redirected to Sign Up page.
    
    **Component used:** 
    + TextInput
    + ToucableOpacity
    _____________________
    
    
    3. Sign Up Page
    
     ![Sign Up Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/images/Sign%20Up.jpg)
    
    User will fill in their email and password in order to register. If user fill in with wrong password or email, an alert will popup. Upon Successfully registered, a popup will be prompt and user will be redirect to Login Page.
    
    Component used:
    + TextInput
    + TouchableOpacity
    _____________________


    4. Scanner Page
    
    ![Home Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/images/Home.jpg)
    
    This is the Scanner Page or Home Page. If user want to scan any barcode , they just need to click on the Open QR Scanner and the camera page will be prompt.
    
    Component used:
    + TouchableOpacity
    _____________________
        
        
    5. QR Generator Page
    
    ![QR Generator Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/images/Gene.jpg)
    
    This is the QR Generator Page. User will fill with any link that they desired in the text field ,click the Generate QR Code button and an image of the QR will be generated.
    
    Component used:
    + Button
    + TextInput
    _____________________


    6. History List
    
    ![History Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/images/List.jpg)
    
    This is the History List Page. Every link that was scanned by the user will be saved in the history list. User can delete any link by holding the link and a popup message will pop.
    
    Component used:
    + Modal
    + Flatlist
        
    _____________________
        
### 6.0 Sequence Diagram
* Login

![Login SD](https://github.com/muhdlaziem/barcode-scanner/blob/master/images/Login%20-%20SD.jpg)
* Logout

![Logout SD](https://github.com/muhdlaziem/barcode-scanner/blob/master/images/Logout%20-%20SD.jpg)
* Register

![Register SD](https://github.com/muhdlaziem/barcode-scanner/blob/master/images/Register%20-%20SD.jpg)
* Scanner

![Scanner SD](https://github.com/muhdlaziem/barcode-scanner/blob/master/images/Scanner%20-%20SD.jpg)
* QR code generator

![QRGene SD](https://github.com/muhdlaziem/barcode-scanner/blob/master/images/Generator%20-%20SD.jpg)
* History List

![History SD](https://github.com/muhdlaziem/barcode-scanner/blob/master/images/History%20-%20SD.jpg)

