// src-tauri/src/main.rs

// importe estes módulos logo no início do arquivo:
use std::path::PathBuf;
use std::process::Command;



#[tauri::command]
async fn get_session_qr_code() -> Result<String, String> {
  // monta o path absoluto até o root do projeto
  let project_root: PathBuf = {
    let mut p = PathBuf::from(env!("CARGO_MANIFEST_DIR")); // .../mantaray-zap-ai-app/src-tauri
    p.pop(); // agora .../mantaray-zap-ai-app
    p
  };

  // path para o script
  let script = project_root
    .join("src-tauri")
    .join("scripts")
    .join("wppconnect.cjs"); // ou .js, conforme você tenha definido

  let output = Command::new("node")
    .current_dir(&project_root)  // define o cwd onde ficam as node_modules
    .arg(script)
    .output()
    .map_err(|e| e.to_string())?;

  if !output.status.success() {
    return Err(String::from_utf8_lossy(&output.stderr).into());
  }
  Ok(String::from_utf8_lossy(&output.stdout).into())
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![get_session_qr_code])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}