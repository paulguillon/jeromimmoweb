function Logout() {
    window.localStorage.removeItem("token");
    return (
        <div className="m-auto">
            <h2>Vous avez été déconnecter</h2>
        </div>
    );

}
export default Logout;