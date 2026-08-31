/**
 * Terminal Interactivo para el Caso de Estudio de Ingeniería Inversa
 * Motorola Moto E6s (XT2053-2 "fiji_64" MT6765)
 */

const TERMINAL_LOGS = {
  brom: [
    { type: "prompt", text: "nexus@arch-lab:~$ python3 mtk.py --preloader preloader_fiji_64.bin" },
    { type: "info", text: "[*] Initializing raw USB interface via libusb-1.0 backend..." },
    { type: "info", text: "[*] Waiting for BROM hardware connection (TP1500 to GND, battery disconnected)..." },
    { type: "success", text: "[USB-DEBUG] Dispositivo detectado: VID=0x0e8d, PID=0x0003 (MediaTek BootROM)" },
    { type: "success", text: "[USB-DEBUG] 🎉 ¡Handshake de hardware completado con éxito! (Magic: 5FF5AFFA)" },
    { type: "info", text: "Preloader - Target Configuration: 0xE5" },
    { type: "warn", text: "Preloader -     SBC enabled:            True  (Secure Boot Check Activo)" },
    { type: "warn", text: "Preloader -     DAA enabled:            True  (Download Agent Auth Activo)" },
    { type: "info", text: "Preloader -     HW code:                0x766 (Helio P22 / MT6765 Architecture)" },
    { type: "info", text: "Preloader -     ME_ID:                  FE433F1378ED842765CFC210C552194F" },
    { type: "info", text: "Preloader -     SOC_ID:                 98E8ACF7C4876148DDEC961EB74EE768398FB4C0247578..." },
    { type: "info", text: "DaHandler - Device is protected by Motorola security policies. Bypassing DAA/SLA..." },
    { type: "accent", text: "PLTools   - Loading payload mt6765_payload.bin (0x264 bytes) into BROM RAM..." },
    { type: "accent", text: "Exploitation - Kamakiri Run: Triggering USB ctrl_transfer buffer overflow..." },
    { type: "success", text: "Exploitation - Done sending payload. Execution jumped to 0x100a00!" },
    { type: "success", text: "[+] Patched loader msg: hash_check disabled in RAM." },
    { type: "success", text: "[+] Security check patched: DAA = Disabled, SBC = Disabled." },
    { type: "info", text: "DAXFlash  - Uploading XFlash Stage 1 from MTK_DA_V5.bin... Jumping to 0x200000" },
    { type: "success", text: "DAXFlash  - DRAM setup passed. EMMC ID: RP64MB (Samsung 64GB eMMC 5.1)" },
    { type: "success", text: "DAXFlash  - Stage 2 active. Full bare-metal R/W access granted." }
  ],

  seccfg: [
    { type: "prompt", text: "nexus@arch-lab:~$ python3 mtk.py --preloader preloader_fiji_64.bin da seccfg unlock --critical" },
    { type: "info", text: "[*] Reading active seccfg structure from /dev/block/mmcblk0p10 (offset: 0x7688000)..." },
    { type: "info", text: "SecCfgV4  - Magic matched: 0x4D4D4D4D ('MMMM') | Size: 1048576 bytes" },
    { type: "accent", text: "SecCfgV4  - Cryptographic validation: Running hardware SEJ (Security Engine) probe..." },
    { type: "success", text: "SecCfgV4  - hwtype found: V4 (Hardware-bound AES128-CBC HACC Signature)" },
    { type: "info", text: "Sej       - Initializing HACC hardware crypto accelerator with silicon-derived OTP key..." },
    { type: "success", text: "Sej       - AES128 CBC - HACC run: Digest computed across seccfg block." },
    { type: "accent", text: "[*] Setting lock_state = 0x03 (LKS_UNLOCK) | dm_verity_state = 0x01 (CRITICAL)" },
    { type: "info", text: "[*] Writing signed seccfg payload directly to eMMC sector 242752..." },
    { type: "success", text: "Done |████████████████████| 100.0% Write (1.00 MB), 3.42 MB/s" },
    { type: "success", text: "DaHandler - Successfully wrote seccfg partition. Cryptographic lock cleared in eMMC." },
    { type: "info", text: "[*] Status: Hardware Red State bypassed at partition level." }
  ],

  fastboot: [
    { type: "prompt", text: "C:\\Recovery> .\\platform-tools\\fastboot.exe getvar all" },
    { type: "info", text: "(bootloader) version: 0.5" },
    { type: "info", text: "(bootloader) product: fiji_64" },
    { type: "info", text: "(bootloader) secure: yes" },
    { type: "danger", text: "(bootloader) unlocked: no                      <-- Anclado en RPMB de hardware" },
    { type: "info", text: "(bootloader) current-slot: a" },
    { type: "danger", text: "(bootloader) slot-unbootable:a: yes            <-- Little Kernel invalidó el slot" },
    { type: "danger", text: "(bootloader) slot-retry-count:a: 0             <-- 7 reintentos de arranque agotados" },
    { type: "prompt", text: "C:\\Recovery> .\\platform-tools\\fastboot.exe flash boot_a .\\boot_magisk_patched.img" },
    { type: "info", text: "Sending 'boot_a' (32768 KB)                        OKAY [  1.078s]" },
    { type: "danger", text: "Writing 'boot_a'                                  FAILED (remote: 'Signature failed, Not allow flash partition!')" },
    { type: "warn", text: "[FORENSIC VERDICT] Little Kernel enforces hardware RPMB verification." },
    { type: "warn", text: "[FORENSIC VERDICT] seccfg is unlocked, but RPMB CID holds factory lock." },
    { type: "success", text: "[FORENSIC VERDICT] Diagnostic: 100% conclusive. Hardware boundary isolated." }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const terminalBody = document.getElementById("terminalBody");
  const tabButtons = document.querySelectorAll(".term-tab-btn");
  const copyBtn = document.getElementById("btnCopyLog");

  if (!terminalBody || !tabButtons.length) return;

  let currentTab = "brom";

  function renderTerminalLines(tabKey) {
    const lines = TERMINAL_LOGS[tabKey] || [];
    terminalBody.innerHTML = "";

    lines.forEach((lineData, idx) => {
      const lineDiv = document.createElement("div");
      lineDiv.className = "terminal-line";

      if (lineData.type === "prompt") {
        lineDiv.innerHTML = `<span class="term-prompt">❯</span> <span class="term-prompt-cmd">${lineData.text}</span>`;
      } else {
        const textClass = `term-text-${lineData.type}`;
        lineDiv.innerHTML = `<span class="${textClass}">${lineData.text}</span>`;
      }

      terminalBody.appendChild(lineDiv);
    });

    // Add trailing active prompt with blinking cursor
    const activePrompt = document.createElement("div");
    activePrompt.className = "terminal-line";
    activePrompt.innerHTML = `<span class="term-prompt">❯</span> <span class="term-cursor"></span>`;
    terminalBody.appendChild(activePrompt);

    // Auto-scroll
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // Tab switching with smooth micro-transition
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      if (targetTab === currentTab) return;

      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentTab = targetTab;
      
      // Fast 120ms fade transition
      terminalBody.classList.add("term-fade-out");
      setTimeout(() => {
        renderTerminalLines(currentTab);
        terminalBody.classList.remove("term-fade-out");
      }, 120);
    });
  });

  // Copy to clipboard
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const lines = TERMINAL_LOGS[currentTab] || [];
      const textToCopy = lines.map(l => l.text).join("\n");

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          ¡Copiado!
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }

  // Initial render
  renderTerminalLines(currentTab);
});
