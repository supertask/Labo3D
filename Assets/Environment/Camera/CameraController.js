#pragma strict

public var tg : Transform;//対象となるオブジェクト

public var dist = 3.0; //カメラからオブジェクトの距離
public var fastness = 1.0; //カメラの追従速度
public var cameraHeight = 2.0; //カメラの高さ

public var layerMask : LayerMask;

private var nextLoc : Vector3; //次にカメラが移動すべき目的点

function LateUpdate () {
	
	//オブジェクトの位置を次の仮カメラ位置とする
	nextLoc = tg.transform.position;
	
	//distで指定された距離(オブジェクトの背面方向へ)離れる
	var dir : Vector3 = tg.TransformDirection(Vector3.forward);
	dir = dir.normalized * dist;
	nextLoc -= dir;
	

	//オブジェクトから後方に離れた位置を候補とする
	var candidate = nextLoc;

	
	//レイキャストを用いてオブジェクトとカメラの間にある壁を判定
	//壁は"Wall"レイヤに属しているものとする
	var dd = Vector3.Distance(tg.transform.position, candidate);
	var dir2 : Vector3 =  candidate -tg.transform.position;
	var hit : RaycastHit;
	if (Physics.Raycast (tg.transform.position, dir2, hit, dd, layerMask)) {
    	    Debug.DrawLine (tg.transform.position, hit.point, Color.red); //対象物と壁に衝突した位置の間に線を引く
    	    nextLoc = hit.point; //衝突位置を次の位置とする
    }
    
    
    nextLoc.y = cameraHeight; //カメラ高さを設定
    var d = nextLoc - transform.position; //現カメラ位置から次位置へのカメラ移動量を算出
	d *= Time.deltaTime*fastness; //速度と経過時間でカメラ移動量を決定
	 
	transform.position += d; //カメラ位置を変更
	transform.LookAt(tg); //オブジェクトの方向にカメラを向ける
	
}
