# barcode-scanner

### 1.0 Configuration
Run this for Android Configuration
```
 cd Barcode/
 npm install
```
 
### 2.0 Introduction
### 3.0 Objective
### 4.0 Features and Functionalities
### 5.0 Screen Navigation
* API used for navigation
    1. React Navigation Stack
    2. Material Bottom Tab Navigator
    
* Screen
    1. Splash Screen
    
     ![Splash Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/Barcode/images/icon.png)
    
    User will be prompted with splash screen when they open the application.
    _____________________
    2. Login Page
    
     ![Splash Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/Barcode/images/icon.png)
    
    User need to sign in before the Home Page is prompted. If user does not have any account, they need to click to Sign Up button to be redirected to Sign Up page.
    
    **Component used:** 
    + TextInput
    + ToucableOpacity
    _____________________
    
    
    3. Sign Up Page
    
     ![Splash Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/Barcode/images/icon.png)
    
    User will fill in their email and password in order to register. If user fill in with wrong password or email, an alert will popup. Upon Successfully registered, a popup will be prompt and user will be redirect to Login Page.
    
    Component used:
    + TextInput
    + TouchableOpacity
    _____________________


    4. Scanner Page
    
    ![Splash Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/Barcode/images/icon.png)
    
    This is the Scanner Page or Home Page. If user want to scan any barcode , they just need to click on the Open QR Scanner and the camera page will be prompt.
    
    Component used:
    + TouchableOpacity
    _____________________
        
        
    5. QR Generator Page
    
    ![Splash Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/Barcode/images/icon.png)
    
    This is the QR Generator Page. User will fill with any link that they desired in the text field ,click the Generate QR Code button and an image of the QR will be generated.
    
    Component used:
    + Button
    + TextInput
    _____________________


    6. History List
    
    ![Splash Screen](https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/Barcode/images/icon.png)
    
    This is the History List Page. Every link that was scanned by the user will be saved in the history list. User can delete any link by holding the link and a popup message will pop.
    
    Component used:
    + Modal
    + Flatlist
        
    _____________________
        
### 6.0 Sequence Diagram
### 7.0 References
