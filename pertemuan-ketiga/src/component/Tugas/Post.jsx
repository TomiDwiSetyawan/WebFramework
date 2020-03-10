import React from "react";

const Post = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/80/80/any" alt="Gambar Tumnail Mahasiswa" />
            </div>
            <div className="konten-mahasiswa">
                <div className="NIM">{props.NIM}</div>
                <p className="nama">{props.nama}</p>
                <p className="alamat">{props.alamat}</p>
                <p className="hp">{props.hp}</p>
                <p className="angkatan">{props.angkatan}</p>
                <p className="status">{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={props.hapusMahasiswa.bind(this, props.id)}>Hapus</button>
            </div>
        </div>
    )
}
export default Post;