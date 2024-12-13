module.exports = {
    // ... другие настройки ...
    "overrides": [
        {
            "files": ["src/app/problematic-file.ts"],
            "rules": {
                "no-unused-vars": "off"
            }
        }
    ]
};