#pragma strict

public var allowPointer : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider) {
	if (other.gameObject.CompareTag('Player')) {
     	//Pointer noactive
     	allowPointer.gameObject.SetActive(true);
	}
}

function OnTriggerExit(other:Collider) {
 	if (other.gameObject.CompareTag('Player')) {
     	//Pointer noactive
     	allowPointer.gameObject.SetActive(false);
	}
}