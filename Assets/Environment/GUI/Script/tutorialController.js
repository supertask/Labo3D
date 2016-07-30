#pragma strict

import UnityEngine.Input;

public var tutorialGUI : Canvas;

function Start () {

}

function Update () {
	if(Input.anyKey) {
		 //Destroy(tutorialGUI);
		 tutorialGUI.gameObject.SetActive(false);
	}
}