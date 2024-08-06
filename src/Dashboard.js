import Header from "./Header"
import Slidebar from "./Sliderbar"

const DashBoard =()=>{
    return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ display: 'flex', marginTop: '60px', width: '100%' }}>
            <Slidebar />
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginLeft: '15%',padding: '20px',width: '85%',backgroundColor: 'whitesmoke',minHeight: 'calc(100vh - 60px)'}}>
                <h1>Dashboard Content</h1>
                <p>Welcome to Dashboard</p>
            </div>
        </div>
    </div>
    )
}

export default DashBoard