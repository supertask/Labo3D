#pragma strict

import UnityEngine.UI;

public var aGUI : Canvas;
  
public var nameText : String;
public var infoText : String;


function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider) {
	if (other.gameObject.CompareTag('Player')) {
	
     	//GUI active
     	aGUI.gameObject.SetActive(true);
     	
     	//GUI send to message
     	var target : Text  = null;
     	for(var child : Transform in aGUI.transform) {
      		if(child.name == "nameText") {
     			target = child.gameObject.GetComponent("Text");
     			target.text =  nameText;
     		}
     		 else if(child.name == "infoText") {
     			target = child.gameObject.GetComponent("Text");
     			target.text = infoText;
     		}
     	}
	}
}

function OnTriggerExit(other:Collider) {
 	if (other.gameObject.CompareTag('Player')) {
     	//GUI noactive
     	aGUI.gameObject.SetActive(false);
	}
}
 
