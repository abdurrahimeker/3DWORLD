let db = window.openDatabase("homepageDb", "1.0", "testdb", 2 * 1024 * 1024)
//tablo ekleme
function createTable() {
    try{
        db.transaction(function(tx){
            tx.executeSql("CREATE TABLE IF NOT EXISTS user (id)")
        })
    }catch(error){
        console.log('error','error')
    }
}
//veri ekleme
function createRecord(){
    db.transaction(function (tx){
        tx.executeSql("INSERT INTO image (id) VALUES  (2)")
    })
}
//veri okuma
function readRecords(){
    try{    
        db.transaction(function (tx){
            tx.executeSql("SELECT * FROM image", [],(tx,result) =>{
                for(let index = 0; index < result.rows.length; index++){
                    console.log('item' ,result.rows.item(index))

                }
            })
        })
    }catch(error){
        console.log('error' , error)
    }
}
//Id ile veri okuma
function readRecordsById(id){
    try{    
        db.transaction(function (tx){
            tx.executeSql("SELECT * FROM image where id=?", [id],(tx,result) =>{
                for(let index = 0; index < result.rows.length; index++){
                    console.log('item' ,result.rows.item(index))

                }
            })
        })
    }catch(error){
        console.log('error' , error)
    }
}

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