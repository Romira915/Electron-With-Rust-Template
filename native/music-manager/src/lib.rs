#[cfg(test)]
mod tests;

use std::path::{Path, PathBuf};
use thiserror::Error;
use tokio::fs;

#[derive(Error, Debug)]
pub enum MusicError {
    #[error(transparent)]
    IoError(#[from] std::io::Error),
}

pub async fn get_music_file_path(dir: &str, extensions: &str) -> Result<PathBuf, MusicError> {
    let mut entrys_dir = fs::read_dir(dir).await?;

    // let mut handles = Vec::new();

    while let Some(entry) = entrys_dir.next_entry().await? {
        let dir = entry.path();
        println!("dir: {}", dir.display());
    }

    return Ok(PathBuf::new());
}
