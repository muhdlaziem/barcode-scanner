/*

1.Create folder drawable kat android/app/main/res
2.Create file - [background_splash.xml]

<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:drawable="@color/splashscreen_bg"/>

<!--tukar res :drawable nama icon kita-->
    <item
        android:width="100dp"
        android:height="100dp"
        android:drawable="@mipmap/icon"
        android:gravity="center" />

</layer-list>
--------------------------------------------------------------------------------------
3.Dlm folder values , tambah file colors.xml

<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="splashscreen_bg">#4F6D7A</color> //ubah color kat sini
    <color name="app_bg">#4F6D7A</color>
</resources>
--------------------------------------------------------------------------------------
4.Dlm folder values , update file styles.xml

<resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:textColor">#000000</item>

        <!-- Add the following line to set the default status bar color for all the app. -->
        <item name="android:statusBarColor">@color/app_bg</item>
        <!-- Add the following line to set the default status bar text color for all the app 
        to be a light color (false) or a dark color (true) -->
        <item name="android:windowLightStatusBar">false</item>
        <!-- Add the following line to set the default background color for all the app. -->
        <item name="android:windowBackground">@color/app_bg</item>
    </style>

    <!-- Adds the splash screen definition -->
    <style name="SplashTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <item name="android:statusBarColor">@color/splashscreen_bg</item>
        <item name="android:background">@drawable/background_splash</item>
    </style>

</resources>
--------------------------------------------------------------------------------------
5. File AndroidManifest.xml

<manifest xmlns:android="http://schemas.android.com/apk/res/android" <---JANGAN COPY
  package="com.splashscreen">

                                                                    <!--Copy start dri bawah ni-->
    <uses-permission android:name="android.permission.INTERNET" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">

        <!-- Add this SplashActivity -->
        <activity
          android:name=".SplashActivity"
          android:theme="@style/SplashTheme"
          android:label="@string/app_name">
          <intent-filter>
              <action android:name="android.intent.action.MAIN" />
              <category android:name="android.intent.category.LAUNCHER" />
          </intent-filter>
        </activity>

        <!-- Remove the intent-filter of the MainActivity and add a param android:exported="true" -->
        <activity
          android:name=".MainActivity"
          android:label="@string/app_name"
          android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
          android:windowSoftInputMode="adjustResize"
          android:exported="true"/>

      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>

</manifest>
--------------------------------------------------------------------------------------
6.Dalam file JAVA kat main gak , create SplashActivity.java

package com.splashscreen; <--- JANGAN COPY (Based on nama file JAVA kau/Project Kau - Blh refer MainActivity.java bawah dia)

                                                    <-Copy start dri bawah ni->
import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
--------------------------------------------------------------------------------------
7.Dalam MainActivit.java

import org.devio.rn.splashscreen.SplashScreen; // Import this.
import android.os.Bundle; // Import this.

<add benda ni .. jgn overwrite>
public class MainActivity extends ReactActivity {
    // Add this method.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
--------------------------------------------------------------------------------------
8.Buat lagi satu file baru dlm res/layout/launch_screen.xml

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/background_splash"
    android:orientation="vertical">
</LinearLayout>
--------------------------------------------------------------------------------------
9.Last sekali :

import SplashScreen from 'react-native-splash-screen'; <-- import this

and 

export default class App extends Component {
  <----------------------->
    componentDidMount() {
    SplashScreen.hide()            <------ tambah benda ni
  }
   <----------------------->


   DONE !!!!!!!
*/