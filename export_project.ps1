# Configuration
$outputFile = "project_context.txt"
$projectRoot = Get-Location
$excludePatterns = @(
    "node_modules", 
    ".git", 
    "dist", 
    "build", 
    "package-lock.json", 
    "*.png", 
    "*.jpg", 
    "*.jpeg", 
    "*.gif", 
    "*.ico", 
    "*.svg", 
    "*.webp",
    "export_project.ps1", 
    "$outputFile",
    ".DS_Store"
)

# Function to check if a path should be excluded
function Should-Exclude {
    param (
        [string]$Path
    )
    
    $relativePath = $Path.Substring($projectRoot.Path.Length + 1)
    
    foreach ($pattern in $excludePatterns) {
        if ($relativePath -like "*$pattern*") {
            return $true
        }
    }
    return $false
}

# Get all files
$files = Get-ChildItem -Path $projectRoot -Recurse -File | Where-Object { -not (Should-Exclude -Path $_.FullName) }

# Prepare content
$content = @()

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($projectRoot.Path.Length + 1)
    $content += "================================================================"
    $content += "File: $relativePath"
    $content += "================================================================"
    
    try {
        $fileContent = Get-Content -Path $file.FullName -Raw
        if ($null -ne $fileContent) {
            $content += $fileContent
        } else {
            $content += "[Empty File]"
        }
    }
    catch {
        $content += "Error reading file: $_"
    }
    $content += "`n"
}

# Write to output file
$content | Set-Content -Path $outputFile -Encoding UTF8

Write-Host "Project context exported to $outputFile"
Write-Host "Total files processed: $($files.Count)"
