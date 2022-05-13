let db = window.openDatabase("homepageDb", "1.0", "testdb", 2 * 1024 * 1024)
//veri okuma

//id kayıt etme
for(idNumber = 1; idNumber < 12; idNumber++){
    idNumbers();
    readRecordsById("image"+idNumber)

}
function idNumbers(){
    document.getElementById("image"+idNumber).addEventListener("click",function(event){
        console.log(event)
        var id = event.target.id
        createRecord(id)
    })
}


function readRecords(){
    try{    
        db.transaction(function (tx){
            tx.executeSql("SELECT * FROM favorites", [],(tx,result) =>{
                for(let index = 0; index < result.rows.length; index++){
                    console.log('item' ,result.rows.item(index))

                }
            })
        })
    }catch(error){
        console.log('error' , error)
    }
}
//tablo ekleme
function createTable() {
    try{
        db.transaction(function(tx){
            tx.executeSql("CREATE TABLE IF NOT EXISTS favorites (id,userId)")
        })
    }catch(error){
        console.log('error','error')
    }
}
//veri ekleme
function createRecord(id){
    console.log(id)
    db.transaction(function (tx){
        tx.executeSql("INSERT INTO favorites (id,userId) VALUES  ('"+id+"','"+id+"')")
    })
}

//Id ile veri okuma
function readRecordsById(id){
    try{    
        db.transaction(function (tx){
            tx.executeSql("SELECT * FROM favorites where id=?", [id],(tx,result) =>{
                for(let index = 0; index < result.rows.length; index++){
                    console.log('item' ,result.rows.item(index))

                }
            })
        })
    }catch(error){
        console.log('error' , error)
    }
}
//silme
function readRecordsByIdDelete(id){
    try{
        db.transaction(function(tx){
            tx.executeSql("DELETE FROM image where id=?",[id],(tx,result)=>{
                console.log('result' , result.rowsAffected)
            })
        })
    }catch(error){
        console.log('error','error')
    }
}
