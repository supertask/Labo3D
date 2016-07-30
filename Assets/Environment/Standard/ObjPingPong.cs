using UnityEngine;
using System.Collections;

public class ObjPingPong : MonoBehaviour {

	private float origin_x, origin_y, origin_z;
	public  char dir =  'X'; // X or Y or Z

	// Use this for initialization
	void Start () {
		origin_x = transform.position.x;
		origin_y = transform.position.y;
		origin_z = transform.position.z;
	}
	
	// Update is called once per frame
	void Update () {
		if(dir == 'X') {
			transform.position = new Vector3(origin_x + Mathf.PingPong(Time.time, 1) / 2,  transform.position.y, transform.position.z);
		}
		else if(dir ==  'Y') {
			transform.position = new Vector3(transform.position.x,  origin_y + Mathf.PingPong(Time.time, 1) / 2, transform.position.z);
		} 
		else {
			transform.position = new Vector3(transform.position.x,  transform.position.y, origin_z + Mathf.PingPong(Time.time, 1) / 2);
		}
	}
}

