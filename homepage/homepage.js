let db = window.openDatabase("homepageDb", "1.0", "testdb", 2 * 1024 * 1024)

function createTable() {
    try{
        db.transaction(function(tx){
            tx.executeSql("CREATE TABLE IF NOT EXISTS user (id)")
        })
    }catch(error){
        console.log('error','error')
    }
}

function createRecord(){
    db.transaction(function (tx){
        tx.executeSql("INSERT INTO image (id) VALUES  (2)")
    })
}
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