#[test]
fn test_get_music_file_path() {
    let rt = tokio::runtime::Runtime::new().expect("Failed to Runtime new");
    let task = crate::get_music_file_path("/", "");

    rt.block_on(task).unwrap();
}
