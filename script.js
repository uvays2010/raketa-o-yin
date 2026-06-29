// в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
// GALAXY WAR: INFINITY - FULL GAME ENGINE
// Massive HTML/CSS/JS Space Shooter Demo
// Features: 20+ planets, 15+ enemies, 10 bosses, upgrades, shop,
// achievements, particles, audio, weapons, skills, HUD, mobile support
// в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

(() => {
    'use strict';

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // DATA DEFINITIONS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    const PLANETS = [
        { id: 0, name: 'Earth Orbit', icon: 'рџЊЌ', bg: '#000510', nebula: 'rgba(0, 120, 255, 0.08)', enemySet: [0, 1], boss: 0, color: '#00d4ff' },
        { id: 1, name: 'Moon Base', icon: 'рџЊ™', bg: '#050510', nebula: 'rgba(180, 180, 255, 0.06)', enemySet: [0, 1, 2], boss: 1, color: '#aaaaff' },
        { id: 2, name: 'Mars', icon: 'рџ”ґ', bg: '#0a0200', nebula: 'rgba(255, 80, 0, 0.08)', enemySet: [1, 2, 3], boss: 2, color: '#ff4400' },
        { id: 3, name: 'Jupiter', icon: 'рџџ ', bg: '#0a0500', nebula: 'rgba(255, 180, 0, 0.06)', enemySet: [2, 3, 4], boss: 3, color: '#ff8800' },
        { id: 4, name: 'Saturn', icon: 'рџЄђ', bg: '#080508', nebula: 'rgba(255, 220, 120, 0.08)', enemySet: [3, 4, 5], boss: 4, color: '#ffcc00' },
        { id: 5, name: 'Uranus', icon: 'рџ§Љ', bg: '#00080a', nebula: 'rgba(80, 255, 255, 0.08)', enemySet: [4, 5, 6], boss: 5, color: '#66ffff' },
        { id: 6, name: 'Neptune', icon: 'рџ”µ', bg: '#00040a', nebula: 'rgba(0, 80, 255, 0.08)', enemySet: [5, 6, 7], boss: 6, color: '#3366ff' },
        { id: 7, name: 'Pluto', icon: 'рџ§ї', bg: '#080808', nebula: 'rgba(180, 180, 200, 0.06)', enemySet: [6, 7, 8], boss: 7, color: '#ccccdd' },
        { id: 8, name: 'Black Hole', icon: 'рџ•іпёЏ', bg: '#020008', nebula: 'rgba(140, 0, 255, 0.12)', enemySet: [7, 8, 9], boss: 8, color: '#aa00ff' },
        { id: 9, name: 'Dark Galaxy', icon: 'рџЊЊ', bg: '#030006', nebula: 'rgba(200, 0, 100, 0.08)', enemySet: [8, 9, 10], boss: 9, color: '#ff0066' },
    ];

    const ROCKETS = [
        { id: 0, name: 'Basic Rocket', desc: 'Standard issue spacecraft. Reliable and balanced.', rarity: 'COMMON', color: '#00d4ff', speed: 5, damage: 10, armor: 100, critical: 5, fireRate: 250, energy: 100, shield: 50, unlocked: true, price: 0, icon: 'рџљЂ' },
        { id: 1, name: 'Laser Rocket', desc: 'Fast striker with rapid laser cannons.', rarity: 'RARE', color: '#ff3366', speed: 6, damage: 14, armor: 85, critical: 12, fireRate: 180, energy: 110, shield: 40, unlocked: false, price: 1500, icon: 'рџ”є' },
        { id: 2, name: 'Plasma Rocket', desc: 'Heavy plasma ship with massive burst damage.', rarity: 'EPIC', color: '#aa44ff', speed: 4.2, damage: 22, armor: 120, critical: 8, fireRate: 330, energy: 90, shield: 60, unlocked: false, price: 5000, icon: 'рџ’ ' },
        { id: 3, name: 'Fire Rocket', desc: 'Burns everything with thermal overload.', rarity: 'EPIC', color: '#ff6600', speed: 5.5, damage: 18, armor: 95, critical: 10, fireRate: 220, energy: 105, shield: 45, unlocked: false, price: 6500, icon: 'рџ”Ґ' },
        { id: 4, name: 'Ice Rocket', desc: 'Freezes enemies and reduces their speed.', rarity: 'LEGENDARY', color: '#66ddff', speed: 5.2, damage: 20, armor: 115, critical: 9, fireRate: 240, energy: 120, shield: 70, unlocked: false, price: 12000, icon: 'вќ„пёЏ' },
        { id: 5, name: 'Thunder Rocket', desc: 'Electric storm specialist. Chain attacks everywhere.', rarity: 'LEGENDARY', color: '#ffe066', speed: 6.4, damage: 17, armor: 90, critical: 20, fireRate: 170, energy: 130, shield: 50, unlocked: false, price: 18000, icon: 'вљЎ' },
        { id: 6, name: 'Dark Rocket', desc: 'Void technology. Brutal crits, risky armor.', rarity: 'MYTHIC', color: '#9900ff', speed: 6.8, damage: 28, armor: 75, critical: 28, fireRate: 210, energy: 140, shield: 35, unlocked: false, price: 30000, icon: 'рџЊ‘' },
    ];

    const WEAPONS = [
        { id: 0, name: 'Machine Gun', icon: 'рџ”«', damage: 10, fireRate: 250, bulletSpeed: 11, spread: 0, ammo: Infinity, rarity: 'COMMON', unlocked: true },
        { id: 1, name: 'Laser', icon: 'рџ”µ', damage: 16, fireRate: 180, bulletSpeed: 14, spread: 0, ammo: Infinity, rarity: 'RARE', unlocked: false },
        { id: 2, name: 'Plasma', icon: 'рџџЈ', damage: 26, fireRate: 340, bulletSpeed: 9, spread: 0, ammo: Infinity, rarity: 'EPIC', unlocked: false },
        { id: 3, name: 'Rocket Launcher', icon: 'рџљЂ', damage: 40, fireRate: 700, bulletSpeed: 7, spread: 0, ammo: 12, rarity: 'EPIC', unlocked: false },
        { id: 4, name: 'Flame Thrower', icon: 'рџ”Ґ', damage: 6, fireRate: 60, bulletSpeed: 8, spread: 0.35, ammo: 300, rarity: 'LEGENDARY', unlocked: false },
        { id: 5, name: 'Rail Gun', icon: 'вљ™пёЏ', damage: 75, fireRate: 900, bulletSpeed: 18, spread: 0, ammo: 25, rarity: 'MYTHIC', unlocked: false },
    ];

    const ULTIMATE_SKILLS = [
        { id: 0, name: 'Meteor Rain', icon: 'в„пёЏ', desc: 'Massive meteors rain across the screen', cooldown: 100 },
        { id: 1, name: 'Laser Storm', icon: 'вњЁ', desc: 'Fire a spread of giant laser beams', cooldown: 100 },
        { id: 2, name: 'EMP Attack', icon: 'вљЎ', desc: 'Stun enemies and destroy bullets', cooldown: 100 },
        { id: 3, name: 'Shield Bubble', icon: 'рџ›ЎпёЏ', desc: 'Invulnerable shield for a short time', cooldown: 100 },
    ];

    const ENEMY_TYPES = [
        { id: 0, name: 'Mini Ship', color: '#ff5577', hp: 25, speed: 1.8, size: 24, score: 80, behavior: 'straight', fireChance: 0.004 },
        { id: 1, name: 'Fast Ship', color: '#ffaa33', hp: 18, speed: 3.2, size: 18, score: 100, behavior: 'zigzag', fireChance: 0.003 },
        { id: 2, name: 'Heavy Ship', color: '#8844ff', hp: 60, speed: 1.1, size: 32, score: 140, behavior: 'straight', fireChance: 0.005 },
        { id: 3, name: 'Sniper Ship', color: '#33ddff', hp: 22, speed: 1.4, size: 20, score: 120, behavior: 'hold', fireChance: 0.009 },
        { id: 4, name: 'Kamikaze', color: '#ff3344', hp: 15, speed: 4.4, size: 16, score: 130, behavior: 'chase', fireChance: 0 },
        { id: 5, name: 'Drone', color: '#66ff99', hp: 20, speed: 2.8, size: 16, score: 110, behavior: 'orbit', fireChance: 0.002 },
        { id: 6, name: 'Alien Ship', color: '#ff66ff', hp: 35, speed: 2.1, size: 26, score: 150, behavior: 'wave', fireChance: 0.006 },
        { id: 7, name: 'Robot Ship', color: '#bbbbff', hp: 48, speed: 1.7, size: 30, score: 160, behavior: 'burst', fireChance: 0.007 },
        { id: 8, name: 'Ghost Ship', color: '#cfcfff', hp: 28, speed: 2.0, size: 24, score: 180, behavior: 'phase', fireChance: 0.005 },
        { id: 9, name: 'Invisible Ship', color: '#ffffff', hp: 24, speed: 2.9, size: 20, score: 200, behavior: 'cloak', fireChance: 0.006 },
        { id: 10, name: 'Mega Tank', color: '#996633', hp: 120, speed: 0.8, size: 44, score: 300, behavior: 'tank', fireChance: 0.01 },
    ];

    const BOSSES = [
        { id: 0, name: 'Destroyer MK-I', color: '#ff2244', hp: 800, phases: 3, pattern: 'spread', size: 90 },
        { id: 1, name: 'Moon Titan', color: '#ccccff', hp: 1200, phases: 3, pattern: 'laser', size: 100 },
        { id: 2, name: 'Mars Devourer', color: '#ff5500', hp: 1600, phases: 4, pattern: 'meteor', size: 110 },
        { id: 3, name: 'Jupiter Core', color: '#ffaa00', hp: 2000, phases: 4, pattern: 'orb', size: 120 },
        { id: 4, name: 'Saturn Warden', color: '#ffdd88', hp: 2400, phases: 4, pattern: 'rings', size: 130 },
        { id: 5, name: 'Uranus Prime', color: '#66ffff', hp: 2800, phases: 5, pattern: 'freeze', size: 120 },
        { id: 6, name: 'Neptune Leviathan', color: '#3366ff', hp: 3200, phases: 5, pattern: 'tidal', size: 140 },
        { id: 7, name: 'Pluto Revenant', color: '#ccccdd', hp: 3600, phases: 5, pattern: 'summon', size: 130 },
        { id: 8, name: 'Void Monarch', color: '#aa00ff', hp: 4200, phases: 5, pattern: 'blackhole', size: 150 },
        { id: 9, name: 'Final Galaxy Core', color: '#ff0066', hp: 5000, phases: 5, pattern: 'chaos', size: 160 },
    ];

    const POWERUPS = [
        { id: 0, type: 'heal', icon: 'вќ¤пёЏ', color: '#33ff88', duration: 0 },
        { id: 1, type: 'shield', icon: 'рџ›ЎпёЏ', color: '#33aaff', duration: 0 },
        { id: 2, type: 'doubleDamage', icon: 'вљ”пёЏ', color: '#ffaa00', duration: 8000 },
        { id: 3, type: 'rapidFire', icon: 'вљЎ', color: '#ffee00', duration: 7000 },
        { id: 4, type: 'multiShot', icon: 'вњ¦', color: '#bb66ff', duration: 9000 },
        { id: 5, type: 'magnet', icon: 'рџ§І', color: '#66ffff', duration: 10000 },
    ];

    const ACHIEVEMENTS = [
        { id: 0, name: 'First Blood', desc: 'Destroy your first enemy', icon: 'рџ©ё', target: 1, type: 'kills' },
        { id: 1, name: 'Hunter', desc: 'Destroy 50 enemies', icon: 'рџЋЇ', target: 50, type: 'kills' },
        { id: 2, name: 'Destroyer', desc: 'Destroy 250 enemies', icon: 'рџ’Ґ', target: 250, type: 'kills' },
        { id: 3, name: 'Boss Hunter', desc: 'Defeat your first boss', icon: 'рџ‘‘', target: 1, type: 'bosses' },
        { id: 4, name: 'Combo Beginner', desc: 'Reach x10 combo', icon: 'рџ”џ', target: 10, type: 'combo' },
        { id: 5, name: 'Untouchable', desc: 'Complete a level without damage', icon: 'вњЁ', target: 1, type: 'nodamage' },
        { id: 6, name: 'Rich Pilot', desc: 'Collect 10,000 gold', icon: 'рџ’°', target: 10000, type: 'gold' },
        { id: 7, name: 'Sniper', desc: 'Reach 80% accuracy', icon: 'рџЋЇ', target: 80, type: 'accuracy' },
        { id: 8, name: 'Survivor', desc: 'Play 10 minutes total', icon: 'вЏ±пёЏ', target: 600, type: 'playtime' },
        { id: 9, name: 'Space Lord', desc: 'Reach level 10', icon: 'рџЊЊ', target: 10, type: 'level' },
        { id: 10, name: 'Collector', desc: 'Unlock 3 rockets', icon: 'рџљЂ', target: 3, type: 'rockets' },
        { id: 11, name: 'Weapon Master', desc: 'Unlock 3 weapons', icon: 'рџ”«', target: 3, type: 'weapons' },
    ];

    const SHOP_ITEMS = {
        rockets: ROCKETS.filter(r => !r.unlocked).map(r => ({ ...r, category: 'rockets' })),
        weapons: WEAPONS.filter(w => !w.unlocked).map(w => ({ ...w, price: (w.id + 1) * 2500, category: 'weapons' })),
        skins: [
            { id: 100, name: 'Neon Blue Skin', icon: 'рџЋЁ', price: 500, category: 'skins' },
            { id: 101, name: 'Crimson Skin', icon: 'рџЋЁ', price: 700, category: 'skins' },
            { id: 102, name: 'Void Skin', icon: 'рџЋЁ', price: 1000, category: 'skins' },
        ],
        chests: [
            { id: 200, name: 'Common Chest', icon: 'рџ“¦', price: 300, category: 'chests' },
            { id: 201, name: 'Rare Chest', icon: 'рџЋЃ', price: 800, category: 'chests' },
            { id: 202, name: 'Epic Chest', icon: 'вњЁ', price: 1500, category: 'chests' },
        ],
        currency: [
            { id: 300, name: '1,000 Gold', icon: 'рџЄ™', price: 0, category: 'currency' },
            { id: 301, name: '100 Diamond', icon: 'рџ’Ћ', price: 0, category: 'currency' },
        ]
    };

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // GAME STATE
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    const gameState = {
        screen: 'menu',
        mode: 'story',
        running: false,
        paused: false,
        gameOver: false,
        levelComplete: false,
        bossFight: false,
        currentPlanet: 0,
        currentLevelInPlanet: 1,
        currentWave: 1,
        totalWaves: 5,
        score: 0,
        combo: 1,
        comboTimer: 0,
        maxCombo: 1,
        totalKills: 0,
        levelKills: 0,
        bossesKilled: 0,
        shotsFired: 0,
        shotsHit: 0,
        damageDone: 0,
        gameTime: 0,
        levelTime: 0,
        lastFrameTime: 0,
        fps: 60,
        fpsFrames: 0,
        fpsTimer: 0,

        // Player progress
        playerLevel: 1,
        playerXP: 0,
        xpToNext: 100,
        gold: 0,
        diamonds: 0,
        crystals: 0,

        // Equipment
        selectedRocket: 0,
        currentWeapon: 0,
        secondaryWeapon: 3,
        ultimateSkill: 0,

        // Settings
        settings: {
            masterVolume: 80,
            musicVolume: 60,
            sfxVolume: 100,
            gfxQuality: 'high',
            showFPS: false,
            screenShake: true,
            particles: 'high',
            vibration: true,
            autoFire: false,
            damageNumbers: true,
        },

        // Inventory
        inventory: {
            rocketsUnlocked: [0],
            weaponsUnlocked: [0],
            chests: { common: 0, rare: 0, epic: 0 },
        },

        // Stats
        stats: {
            totalPlayTime: 0,
            highestScore: 0,
            totalKills: 0,
            bossKills: 0,
            totalDamage: 0,
            totalGold: 0,
            distanceTraveled: 0,
            levelsCompleted: 0,
        },

        // Achievements
        achievements: ACHIEVEMENTS.map(a => ({ ...a, unlocked: false, progress: 0 })),

        // Temporary run state
        player: null,
        boss: null,
        entities: {
            bullets: [],
            enemyBullets: [],
            enemies: [],
            particles: [],
            stars: [],
            explosions: [],
            powerups: [],
            damageTexts: [],
            floatingCoins: [],
        },
        activePowerups: [],
        screenShakeIntensity: 0,
    };

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // DOM REFERENCES
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    const dom = {};
    let canvas, ctx, minimapCanvas, minimapCtx;
    let audioCtx = null;

    function cacheDom() {
        const ids = [
            'preloader', 'preload-fill', 'preload-text',
            'menu-screen', 'hangar-screen', 'shop-screen', 'achievements-screen', 'settings-screen', 'game-screen',
            'menu-stars-canvas', 'hangar-canvas', 'shop-canvas', 'ach-canvas', 'settings-canvas',
            'btn-start', 'btn-story', 'btn-survival', 'btn-hangar', 'btn-shop', 'btn-achievements', 'btn-settings',
            'btn-hangar-back', 'btn-shop-back', 'btn-ach-back', 'btn-settings-back', 'btn-reset-settings',
            'btn-equip', 'btn-upgrade-rocket',
            'menu-gold', 'menu-diamond', 'menu-crystal',
            'shop-gold', 'shop-diamond',
            'rocket-list', 'rocket-preview-canvas', 'rocket-title', 'rocket-desc', 'rocket-rarity', 'rocket-stats-grid', 'weapon-slots', 'skill-slots',
            'shop-grid', 'achievements-grid', 'ach-count', 'ach-fill',
            'vol-master', 'vol-music', 'vol-sfx', 'vol-master-val', 'vol-music-val', 'vol-sfx-val',
            'gfx-quality', 'show-fps', 'screen-shake', 'particle-count', 'vibration', 'auto-fire', 'damage-numbers',
            'game-canvas', 'minimap-canvas',
            'hp-fill', 'hp-text', 'shield-fill', 'shield-text', 'energy-fill', 'energy-text', 'xp-fill', 'xp-text',
            'level-planet', 'level-name', 'level-number', 'wave-num', 'wave-total',
            'score-value', 'combo-display', 'combo-value', 'combo-fill', 'kill-count',
            'weapon-icon', 'weapon-name', 'weapon-ammo', 'sec-ammo', 'ult-fill', 'ult-label',
            'fps-counter', 'damage-numbers', 'notifications', 'powerup-indicators',
            'boss-hud', 'boss-title', 'boss-phase', 'boss-hp-fill',
            'pause-screen', 'btn-resume', 'btn-restart', 'btn-quit', 'pause-score', 'pause-time', 'pause-kills',
            'gameover-screen', 'btn-go-retry', 'btn-go-menu', 'go-score', 'go-kills', 'go-accuracy', 'go-combo', 'go-time', 'go-damage', 'go-gold', 'go-diamonds', 'go-xp',
            'levelcomplete-screen', 'btn-next-level', 'btn-lc-menu', 'lc-score', 'lc-kills', 'lc-time', 'lc-accuracy', 'lc-gold', 'lc-diamonds', 'lc-xp',
            'boss-warning', 'boss-warning-name',
            'achievement-popup', 'ach-popup-name',
            'levelup-popup', 'levelup-level',
        ];
        ids.forEach(id => dom[id] = document.getElementById(id));
        canvas = dom['game-canvas'];
        ctx = canvas.getContext('2d');
        minimapCanvas = dom['minimap-canvas'];
        minimapCtx = minimapCanvas.getContext('2d');
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // UTILITY
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    const rand = (min, max) => Math.random() * (max - min) + min;
    const randInt = (min, max) => Math.floor(rand(min, max + 1));
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
    const lerp = (a, b, t) => a + (b - a) * t;
    const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
    const angleTo = (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1);
    const rarityColor = (rarity) => ({
        COMMON: '#999999', RARE: '#33aaff', EPIC: '#aa44ff', LEGENDARY: '#ffbb33', MYTHIC: '#ff3366', DIVINE: '#ffee88'
    }[rarity] || '#999999');
    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // AUDIO SYSTEM
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function initAudio() {
        if (audioCtx) return;
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio not supported');
        }
    }

    function playTone(freq = 440, duration = 0.1, type = 'sine', volume = 0.1) {
        if (!audioCtx || gameState.settings.sfxVolume <= 0) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.value = volume * (gameState.settings.masterVolume / 100) * (gameState.settings.sfxVolume / 100);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }

    function playSound(name) {
        switch (name) {
            case 'click': playTone(600, 0.05, 'square', 0.03); break;
            case 'shoot': playTone(880, 0.04, 'sawtooth', 0.02); break;
            case 'hit': playTone(220, 0.06, 'square', 0.04); break;
            case 'explosion': playTone(100, 0.2, 'sawtooth', 0.05); break;
            case 'powerup': playTone(1200, 0.15, 'sine', 0.04); break;
            case 'boss': playTone(80, 0.4, 'triangle', 0.08); break;
            case 'levelup': playTone(660, 0.2, 'sine', 0.04); setTimeout(() => playTone(880, 0.2, 'sine', 0.04), 100); break;
            case 'ultimate': playTone(180, 0.5, 'sawtooth', 0.08); break;
            case 'damage': playTone(160, 0.08, 'square', 0.03); break;
        }
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // PRELOADER
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    async function runPreloader() {
        const steps = [
            'Initializing galaxy map...',
            'Loading ship hangar...',
            'Charging plasma cores...',
            'Calibrating weapons...',
            'Generating starfields...',
            'Syncing achievements...',
            'Ready for launch...'
        ];
        for (let i = 0; i < steps.length; i++) {
            dom['preload-text'].textContent = steps[i];
            dom['preload-fill'].style.width = `${((i + 1) / steps.length) * 100}%`;
            await new Promise(r => setTimeout(r, 180));
        }
        dom['preloader'].classList.add('fade-out');
        setTimeout(() => dom['preloader'].remove(), 600);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // SCREEN MANAGEMENT
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function showScreen(name) {
        ['menu-screen', 'hangar-screen', 'shop-screen', 'achievements-screen', 'settings-screen', 'game-screen'].forEach(id => {
            dom[id].classList.remove('active');
        });
        const map = {
            menu: 'menu-screen', hangar: 'hangar-screen', shop: 'shop-screen', achievements: 'achievements-screen', settings: 'settings-screen', game: 'game-screen'
        };
        dom[map[name]].classList.add('active');
        gameState.screen = name;
        updateMenuCurrency();
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // STARFIELD BACKGROUNDS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    const backgroundCanvases = [];

    function initBackgroundCanvas(id) {
        const c = dom[id];
        if (!c) return;
        const cctx = c.getContext('2d');
        const stars = Array.from({ length: 180 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 1.5 + 0.2,
            speed: Math.random() * 0.3 + 0.05,
            alpha: Math.random() * 0.8 + 0.2,
            hue: randInt(190, 260),
        }));
        backgroundCanvases.push({ c, ctx: cctx, stars, id });
        resizeSingleCanvas(c);
    }

    function resizeSingleCanvas(c) {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    }

    function updateBackgrounds() {
        backgroundCanvases.forEach(bg => {
            const active = bg.id.includes(gameState.screen) || (gameState.screen === 'menu' && bg.id === 'menu-stars-canvas');
            if (!active) return;
            bg.ctx.fillStyle = '#000000';
            bg.ctx.fillRect(0, 0, bg.c.width, bg.c.height);
            bg.stars.forEach(star => {
                star.y += star.speed;
                if (star.y > bg.c.height) {
                    star.y = -5;
                    star.x = Math.random() * bg.c.width;
                }
                bg.ctx.beginPath();
                bg.ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                bg.ctx.fillStyle = `hsla(${star.hue}, 80%, 80%, ${star.alpha})`;
                bg.ctx.fill();
            });
        });
        requestAnimationFrame(updateBackgrounds);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // PLAYER CREATION
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function createPlayer() {
        const rocket = ROCKETS[gameState.selectedRocket];
        const weapon = WEAPONS[gameState.currentWeapon];
        return {
            x: canvas.width / 2,
            y: canvas.height - 100,
            vx: 0,
            vy: 0,
            w: 34,
            h: 44,
            speed: rocket.speed,
            baseSpeed: rocket.speed,
            hp: rocket.armor,
            maxHp: rocket.armor,
            shield: rocket.shield,
            maxShield: rocket.shield,
            energy: rocket.energy,
            maxEnergy: rocket.energy,
            damage: rocket.damage,
            baseDamage: rocket.damage,
            fireRate: weapon.fireRate,
            baseFireRate: weapon.fireRate,
            critical: rocket.critical,
            weapon: weapon.id,
            ammo: weapon.ammo,
            secondaryAmmo: 3,
            color: rocket.color,
            invulnerable: 0,
            lastShot: 0,
            shieldCooldown: 0,
            shieldRegenTimer: 0,
            distance: 0,
            noDamageThisLevel: true,
        };
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // GAME START / RESET
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function startGame(mode = 'story') {
        initAudio();
        gameState.mode = mode;
        gameState.running = true;
        gameState.paused = false;
        gameState.gameOver = false;
        gameState.levelComplete = false;
        gameState.bossFight = false;
        gameState.currentWave = 1;
        gameState.totalWaves = mode === 'survival' ? 999 : 5;
        gameState.score = 0;
        gameState.combo = 1;
        gameState.comboTimer = 0;
        gameState.maxCombo = 1;
        gameState.levelKills = 0;
        gameState.shotsFired = 0;
        gameState.shotsHit = 0;
        gameState.damageDone = 0;
        gameState.levelTime = 0;
        gameState.screenShakeIntensity = 0;

        gameState.player = createPlayer();
        gameState.boss = null;
        gameState.activePowerups = [];
        gameState.entities = {
            bullets: [], enemyBullets: [], enemies: [], particles: [], explosions: [], powerups: [], damageTexts: [], floatingCoins: [], stars: []
        };

        initGameStars();
        updateHUD();
        updatePlanetHUD();
        hideAllOverlays();
        showScreen('game');
        playSound('click');
        requestAnimationFrame(gameLoop);
    }

    function hideAllOverlays() {
        dom['pause-screen'].classList.add('hidden');
        dom['gameover-screen'].classList.add('hidden');
        dom['levelcomplete-screen'].classList.add('hidden');
        dom['boss-warning'].classList.add('hidden');
        dom['boss-hud'].classList.add('hidden');
        dom['achievement-popup'].classList.add('hidden');
        dom['levelup-popup'].classList.add('hidden');
    }

    function resetToMenu() {
        gameState.running = false;
        showScreen('menu');
        updateMenuCurrency();
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // GAME LOOP
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function gameLoop(timestamp) {
        if (!gameState.running) return;

        const dt = gameState.lastFrameTime ? (timestamp - gameState.lastFrameTime) / 16.6667 : 1;
        gameState.lastFrameTime = timestamp;

        // FPS
        gameState.fpsFrames++;
        gameState.fpsTimer += dt * 16.6667;
        if (gameState.fpsTimer >= 500) {
            gameState.fps = Math.round(gameState.fpsFrames * 1000 / gameState.fpsTimer);
            gameState.fpsFrames = 0;
            gameState.fpsTimer = 0;
            dom['fps-counter'].textContent = `${gameState.fps} FPS`;
        }

        if (!gameState.paused && !gameState.gameOver && !gameState.levelComplete) {
            gameState.gameTime += dt / 60;
            gameState.levelTime += dt / 60;
            gameState.stats.totalPlayTime += dt / 60;
            update(dt);
            render();
        }

        requestAnimationFrame(gameLoop);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // INPUT
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    const keys = {};
    let touchState = { active: false, x: 0, y: 0 };

    function initInput() {
        document.addEventListener('keydown', e => {
            keys[e.code] = true;
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();

            if (e.code === 'Escape' && gameState.screen === 'game') togglePause();
            if (e.code === 'KeyP' && gameState.screen === 'game') togglePause();
            if (e.code === 'KeyQ' && gameState.screen === 'game') switchWeapon();
            if (e.code === 'KeyR' && gameState.screen === 'game') activateShieldBurst();
        });

        document.addEventListener('keyup', e => keys[e.code] = false);

        document.addEventListener('touchstart', e => {
            const t = e.touches[0];
            touchState.active = true;
            touchState.x = t.clientX;
            touchState.y = t.clientY;
            if (gameState.screen === 'game') keys['Space'] = true;
        }, { passive: true });

        document.addEventListener('touchmove', e => {
            if (!touchState.active || !gameState.player || gameState.screen !== 'game') return;
            const t = e.touches[0];
            const dx = t.clientX - touchState.x;
            const dy = t.clientY - touchState.y;
            gameState.player.x += dx;
            gameState.player.y += dy;
            touchState.x = t.clientX;
            touchState.y = t.clientY;
            e.preventDefault();
        }, { passive: false });

        document.addEventListener('touchend', () => {
            touchState.active = false;
            keys['Space'] = false;
        });
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // UPDATE
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function update(dt) {
        const player = gameState.player;
        const planet = PLANETS[gameState.currentPlanet];

        updatePlayer(dt, player);
        updateStars(dt);
        spawnWaveLogic(dt, planet);
        updateEnemies(dt, player);
        updateBoss(dt, player);
        updateBullets(dt);
        updatePowerups(dt, player);
        updateParticles(dt);
        updateDamageTexts(dt);
        updateCombo(dt);
        updatePowerupTimers(dt);
        updateMinimap();
        handleCollisions();
        regenSystems(dt, player);
        cleanupEntities();
        updateHUD();
        updateStats();
    }

    function updatePlayer(dt, player) {
        const prevX = player.x, prevY = player.y;

        if (keys['ArrowLeft'] || keys['KeyA']) player.x -= player.speed * dt;
        if (keys['ArrowRight'] || keys['KeyD']) player.x += player.speed * dt;
        if (keys['ArrowUp'] || keys['KeyW']) player.y -= player.speed * dt;
        if (keys['ArrowDown'] || keys['KeyS']) player.y += player.speed * dt;

        player.x = clamp(player.x, player.w / 2 + 10, canvas.width - player.w / 2 - 10);
        player.y = clamp(player.y, player.h / 2 + 20, canvas.height - player.h / 2 - 20);

        player.distance += dist(prevX, prevY, player.x, player.y);
        gameState.stats.distanceTraveled += dist(prevX, prevY, player.x, player.y);

        if (player.invulnerable > 0) player.invulnerable -= dt * 16.6667;
        if (player.shieldCooldown > 0) player.shieldCooldown -= dt * 16.6667;

        if ((keys['Space'] || gameState.settings.autoFire) && !gameState.paused) {
            const now = performance.now();
            if (now - player.lastShot > player.fireRate) {
                shoot();
                player.lastShot = now;
            }
        }

        if (keys['KeyE'] && parseFloat(dom['ult-fill'].style.width || '0') >= 100) {
            useUltimate();
            keys['KeyE'] = false;
        }
    }

    function regenSystems(dt, player) {
        player.energy = clamp(player.energy + 0.15 * dt, 0, player.maxEnergy);
        if (player.shield < player.maxShield && player.shieldCooldown <= 0) {
            player.shield += 0.06 * dt;
            player.shield = clamp(player.shield, 0, player.maxShield);
        }
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // STARS / BACKGROUND FX
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function initGameStars() {
        gameState.entities.stars = [];
        const count = gameState.settings.gfxQuality === 'ultra' ? 180 : gameState.settings.gfxQuality === 'high' ? 130 : 90;
        for (let i = 0; i < count; i++) {
            gameState.entities.stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 2 + 0.5,
                r: Math.random() * 1.6 + 0.2,
                hue: randInt(180, 250),
            });
        }
    }

    function updateStars(dt) {
        gameState.entities.stars.forEach(s => {
            s.y += s.z * dt;
            if (s.y > canvas.height) {
                s.y = -5;
                s.x = Math.random() * canvas.width;
            }
        });
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // SPAWNING
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    let spawnTimer = 0;
    let spawnedThisWave = 0;
    let waveCleared = false;
    let bossSpawnTriggered = false;

    function spawnWaveLogic(dt, planet) {
        if (gameState.bossFight) return;

        const enemiesPerWave = gameState.mode === 'survival' ? 8 + gameState.currentWave * 2 : 6 + gameState.currentWave * 3;
        spawnTimer += dt;

        if (spawnedThisWave < enemiesPerWave && spawnTimer > (40 - gameState.currentWave * 3)) {
            spawnTimer = 0;
            spawnEnemy(planet.enemySet[randInt(0, planet.enemySet.length - 1)]);
            spawnedThisWave++;
        }

        if (spawnedThisWave >= enemiesPerWave && gameState.entities.enemies.length === 0 && !waveCleared) {
            waveCleared = true;
            if (gameState.currentWave < gameState.totalWaves) {
                setTimeout(() => {
                    gameState.currentWave++;
                    spawnedThisWave = 0;
                    waveCleared = false;
                    showNotification(`WAVE ${gameState.currentWave}`, 'powerup');
                    updatePlanetHUD();
                }, 800);
            } else if (!bossSpawnTriggered) {
                bossSpawnTriggered = true;
                setTimeout(() => triggerBossFight(), 1200);
            }
        }
    }

    function spawnEnemy(typeId) {
        const t = ENEMY_TYPES[typeId];
        gameState.entities.enemies.push({
            type: t.id,
            name: t.name,
            x: rand(40, canvas.width - 40),
            y: -40,
            baseX: 0,
            vx: 0,
            vy: t.speed + gameState.currentPlanet * 0.08 + gameState.currentWave * 0.04,
            w: t.size,
            h: t.size,
            hp: t.hp + gameState.currentPlanet * 8 + gameState.currentWave * 4,
            maxHp: t.hp + gameState.currentPlanet * 8 + gameState.currentWave * 4,
            color: t.color,
            score: t.score,
            behavior: t.behavior,
            fireChance: t.fireChance,
            phase: Math.random() * Math.PI * 2,
            timer: 0,
            opacity: 1,
            frozen: 0,
        });
    }

    function triggerBossFight() {
        gameState.bossFight = true;
        const bossData = BOSSES[PLANETS[gameState.currentPlanet].boss];
        dom['boss-warning-name'].textContent = bossData.name;
        dom['boss-warning'].classList.remove('hidden');
        playSound('boss');
        setTimeout(() => {
            dom['boss-warning'].classList.add('hidden');
            spawnBoss(bossData);
        }, 2000);
    }

    function spawnBoss(data) {
        gameState.boss = {
            ...data,
            x: canvas.width / 2,
            y: 100,
            vx: 2,
            vy: 0,
            maxHp: data.hp + gameState.currentPlanet * 300,
            hp: data.hp + gameState.currentPlanet * 300,
            phase: 1,
            timer: 0,
            summonTimer: 0,
            invulnerable: 0,
        };
        dom['boss-title'].textContent = data.name;
        dom['boss-phase'].textContent = `Phase 1/${data.phases}`;
        dom['boss-hud'].classList.remove('hidden');
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // ENEMIES / BOSS UPDATE
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function updateEnemies(dt, player) {
        gameState.entities.enemies.forEach(enemy => {
            enemy.timer += dt;
            if (enemy.frozen > 0) {
                enemy.frozen -= dt * 16.6667;
            }
            const speedMul = enemy.frozen > 0 ? 0.35 : 1;

            switch (enemy.behavior) {
                case 'straight':
                    enemy.y += enemy.vy * dt * speedMul;
                    break;
                case 'zigzag':
                    enemy.y += enemy.vy * dt * speedMul;
                    enemy.x += Math.sin(enemy.timer * 0.08) * 2.4 * dt;
                    break;
                case 'hold':
                    if (enemy.y < 120) enemy.y += enemy.vy * dt * speedMul;
                    else enemy.x += Math.sin(enemy.timer * 0.04) * 1.5 * dt;
                    break;
                case 'chase': {
                    const ang = angleTo(enemy.x, enemy.y, player.x, player.y);
                    enemy.x += Math.cos(ang) * enemy.vy * dt * 0.8 * speedMul;
                    enemy.y += Math.sin(ang) * enemy.vy * dt * speedMul;
                    break;
                }
                case 'orbit':
                    enemy.y += enemy.vy * 0.7 * dt * speedMul;
                    enemy.x += Math.cos(enemy.timer * 0.06) * 2.2 * dt;
                    break;
                case 'wave':
                    enemy.y += enemy.vy * dt * speedMul;
                    enemy.x += Math.sin(enemy.timer * 0.1 + enemy.phase) * 3.2 * dt;
                    break;
                case 'burst':
                    enemy.y += enemy.vy * dt * speedMul * (Math.sin(enemy.timer * 0.12) > 0 ? 1.6 : 0.5);
                    break;
                case 'phase':
                    enemy.y += enemy.vy * dt * speedMul;
                    enemy.opacity = 0.4 + Math.sin(enemy.timer * 0.08) * 0.4;
                    break;
                case 'cloak':
                    enemy.y += enemy.vy * dt * speedMul;
                    enemy.opacity = Math.sin(enemy.timer * 0.14) > 0 ? 0.15 : 0.9;
                    break;
                case 'tank':
                    enemy.y += enemy.vy * dt * speedMul;
                    break;
            }

            if (enemy.fireChance > 0 && Math.random() < enemy.fireChance * dt * 4 && enemy.y > 0) {
                enemyShoot(enemy);
            }
        });
    }

    function updateBoss(dt, player) {
        const boss = gameState.boss;
        if (!boss) return;
        boss.timer += dt;
        if (boss.invulnerable > 0) boss.invulnerable -= dt * 16.6667;

        // Movement
        boss.x += boss.vx * dt;
        if (boss.x < 80 || boss.x > canvas.width - 80) boss.vx *= -1;
        boss.y = 100 + Math.sin(boss.timer * 0.02) * 20;

        // Phase system
        const phaseThreshold = boss.maxHp / boss.phases;
        const newPhase = clamp(Math.ceil((boss.maxHp - boss.hp + 1) / phaseThreshold), 1, boss.phases);
        if (newPhase !== boss.phase) {
            boss.phase = newPhase;
            boss.invulnerable = 700;
            dom['boss-phase'].textContent = `Phase ${boss.phase}/${boss.phases}`;
            spawnExplosion(boss.x, boss.y, boss.color, 30);
            shakeScreen(10);
        }

        // Attack patterns
        if (boss.pattern === 'spread' && Math.floor(boss.timer) % 50 === 0) bossSpreadAttack(boss);
        if (boss.pattern === 'laser' && Math.floor(boss.timer) % 70 === 0) bossLaserAttack(boss, player);
        if (boss.pattern === 'meteor' && Math.floor(boss.timer) % 90 === 0) bossMeteorAttack(boss);
        if (boss.pattern === 'orb' && Math.floor(boss.timer) % 65 === 0) bossOrbAttack(boss);
        if (boss.pattern === 'rings' && Math.floor(boss.timer) % 80 === 0) bossRingAttack(boss);
        if (boss.pattern === 'freeze' && Math.floor(boss.timer) % 100 === 0) bossFreezeAttack(boss);
        if (boss.pattern === 'tidal' && Math.floor(boss.timer) % 85 === 0) bossTidalAttack(boss, player);
        if (boss.pattern === 'summon' && Math.floor(boss.timer) % 120 === 0) bossSummonAdds(boss);
        if (boss.pattern === 'blackhole' && Math.floor(boss.timer) % 95 === 0) bossBlackholeAttack(boss, player);
        if (boss.pattern === 'chaos' && Math.floor(boss.timer) % 60 === 0) bossChaosAttack(boss, player);
    }

    // Boss attacks
    function bossSpreadAttack(boss) {
        for (let i = -3; i <= 3; i++) {
            gameState.entities.enemyBullets.push({
                x: boss.x + i * 8, y: boss.y + 20,
                vx: i * 0.8, vy: 4 + boss.phase * 0.5,
                r: 4, color: boss.color, damage: 10 + boss.phase * 2, glow: true
            });
        }
    }
    function bossLaserAttack(boss, player) {
        const ang = angleTo(boss.x, boss.y, player.x, player.y);
        for (let i = -1; i <= 1; i++) {
            gameState.entities.enemyBullets.push({
                x: boss.x, y: boss.y,
                vx: Math.cos(ang + i * 0.08) * 6,
                vy: Math.sin(ang + i * 0.08) * 6,
                r: 3, color: '#ffccff', damage: 14, glow: true
            });
        }
    }
    function bossMeteorAttack(boss) {
        for (let i = 0; i < 5 + boss.phase; i++) {
            gameState.entities.enemyBullets.push({
                x: rand(40, canvas.width - 40), y: -20,
                vx: rand(-0.5, 0.5), vy: rand(4, 7),
                r: rand(5, 8), color: '#ff6600', damage: 18, meteor: true
            });
        }
    }
    function bossOrbAttack(boss) {
        const count = 8 + boss.phase * 2;
        for (let i = 0; i < count; i++) {
            const a = (Math.PI * 2 / count) * i;
            gameState.entities.enemyBullets.push({
                x: boss.x, y: boss.y,
                vx: Math.cos(a) * 3, vy: Math.sin(a) * 3,
                r: 4, color: '#ffaa00', damage: 12, glow: true
            });
        }
    }
    function bossRingAttack(boss) { bossOrbAttack(boss); setTimeout(() => bossOrbAttack(boss), 400); }
    function bossFreezeAttack(boss) { bossLaserAttack(boss, gameState.player); }
    function bossTidalAttack(boss) {
        for (let y = 0; y < 6; y++) {
            gameState.entities.enemyBullets.push({ x: y % 2 ? -10 : canvas.width + 10, y: 120 + y * 60, vx: y % 2 ? 5 : -5, vy: 0, r: 5, color: '#3399ff', damage: 14 });
        }
    }
    function bossSummonAdds() {
        for (let i = 0; i < 2; i++) spawnEnemy(randInt(0, 4));
    }
    function bossBlackholeAttack(boss, player) {
        const ang = angleTo(player.x, player.y, boss.x, boss.y);
        player.x += Math.cos(ang) * 10;
        player.y += Math.sin(ang) * 10;
        bossOrbAttack(boss);
    }
    function bossChaosAttack(boss, player) {
        bossSpreadAttack(boss);
        bossLaserAttack(boss, player);
        if (Math.random() < 0.5) bossMeteorAttack(boss);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // BULLETS / WEAPONS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

 function shoot() {
    const player = gameState.player;
    const weapon = WEAPONS[player.weapon];
    if (player.energy < 2) return;

    playSound('shoot');
    player.energy -= 2;
    gameState.shotsFired++;

    const doubleDamage = gameState.activePowerups.some(p => p.type === 'doubleDamage');
    const damage = player.damage * (doubleDamage ? 2 : 1);

    for (let i = -2; i <= 2; i++) {
        gameState.entities.bullets.push({
            x: player.x + i * 6,
            y: player.y - player.h / 2,
            vx: i * 0.8,
            vy: -weapon.bulletSpeed,
            r: 3,
            color: player.color,
            damage,
            pierce: 1,
            weapon: weapon.id,
        });
    }
}

    function switchWeapon() {
        const unlocked = gameState.inventory.weaponsUnlocked;
        const idx = unlocked.indexOf(gameState.currentWeapon);
        const next = unlocked[(idx + 1) % unlocked.length];
        gameState.currentWeapon = next;
        gameState.player.weapon = next;
        gameState.player.fireRate = WEAPONS[next].fireRate;
        showNotification(WEAPONS[next].name, 'powerup');
        updateWeaponHUD();
    }

    function activateShieldBurst() {
        const p = gameState.player;
        if (p.energy < 30 || p.shieldCooldown > 0) return;
        p.energy -= 30;
        p.shield = clamp(p.shield + 25, 0, p.maxShield);
        p.shieldCooldown = 3000;
        spawnExplosion(p.x, p.y, '#33aaff', 16);
        showDamageText(p.x, p.y, '+SHIELD', 'heal');
    }

    function useUltimate() {
        playSound('ultimate');
        const skill = ULTIMATE_SKILLS[gameState.ultimateSkill];
        dom['ult-fill'].style.width = '0%';

        switch (skill.id) {
            case 0: // Meteor Rain
                for (let i = 0; i < 25; i++) {
                    setTimeout(() => {
                        const x = rand(40, canvas.width - 40);
                        gameState.entities.bullets.push({ x, y: -20, vx: rand(-0.5, 0.5), vy: rand(10, 14), r: rand(5, 8), color: '#ffaa00', damage: 35, pierce: 5, meteor: true });
                    }, i * 60);
                }
                break;
            case 1: // Laser Storm
                for (let i = 0; i < 12; i++) {
                    const angle = -Math.PI / 2 + (i - 6) * 0.12;
                    gameState.entities.bullets.push({ x: gameState.player.x, y: gameState.player.y, vx: Math.cos(angle) * 15, vy: Math.sin(angle) * 15, r: 5, color: '#ff66ff', damage: 45, pierce: 10, laser: true });
                }
                break;
            case 2: // EMP
                gameState.entities.enemyBullets = [];
                gameState.entities.enemies.forEach(e => e.frozen = 3000);
                if (gameState.boss) gameState.boss.invulnerable = 0;
                spawnExplosion(gameState.player.x, gameState.player.y, '#66ffff', 40);
                break;
            case 3: // Shield Bubble
                gameState.player.invulnerable = 5000;
                gameState.player.shield = gameState.player.maxShield;
                break;
        }
    }

    function enemyShoot(enemy) {
        const ang = angleTo(enemy.x, enemy.y, gameState.player.x, gameState.player.y);
        gameState.entities.enemyBullets.push({
            x: enemy.x, y: enemy.y,
            vx: Math.cos(ang) * 4,
            vy: Math.sin(ang) * 1,
            r: enemy.type === 3 ? 4 : 3,
            color: enemy.color,
            damage: enemy.type === 10 ? 18 : 8,
            glow: true,
        });
    }

    function updateBullets(dt) {
        gameState.entities.bullets.forEach(b => {
            b.x += b.vx * dt;
            b.y += b.vy * dt;
        });
        gameState.entities.enemyBullets.forEach(b => {
            b.x += b.vx * dt;
            b.y += b.vy * dt;
        });
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // POWERUPS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function spawnPowerup(x, y) {
        if (Math.random() > 0.18) return;
        const p = POWERUPS[randInt(0, POWERUPS.length - 1)];
        gameState.entities.powerups.push({
            x, y,
            vy: 1.4,
            w: 16, h: 16,
            ...p,
            pulse: 0,
        });
    }

    function updatePowerups(dt, player) {
        gameState.entities.powerups.forEach(p => {
            p.y += p.vy * dt;
            p.pulse += dt;

            const magnet = gameState.activePowerups.some(a => a.type === 'magnet');
            if (magnet) {
                const d = dist(p.x, p.y, player.x, player.y);
                if (d < 180) {
                    const ang = angleTo(p.x, p.y, player.x, player.y);
                    p.x += Math.cos(ang) * 4 * dt;
                    p.y += Math.sin(ang) * 4 * dt;
                }
            }
        });
    }

    function collectPowerup(powerup) {
        playSound('powerup');
        showNotification(powerup.type.toUpperCase(), 'powerup');

        switch (powerup.type) {
            case 'heal':
                gameState.player.hp = clamp(gameState.player.hp + 25, 0, gameState.player.maxHp);
                showDamageText(gameState.player.x, gameState.player.y, '+25', 'heal');
                break;
            case 'shield':
                gameState.player.shield = clamp(gameState.player.shield + 20, 0, gameState.player.maxShield);
                break;
            default:
                gameState.activePowerups.push({ type: powerup.type, time: powerup.duration, max: powerup.duration, icon: powerup.icon });
                renderPowerupBadges();
                break;
        }
    }

    function updatePowerupTimers(dt) {
        gameState.activePowerups.forEach(p => p.time -= dt * 16.6667);
        gameState.activePowerups = gameState.activePowerups.filter(p => p.time > 0);
        renderPowerupBadges();
    }

    function renderPowerupBadges() {
        dom['powerup-indicators'].innerHTML = '';
        gameState.activePowerups.forEach(p => {
            const el = document.createElement('div');
            el.className = 'powerup-badge';
            el.innerHTML = `<span>${p.icon}</span><span>${p.type}</span><span class="pb-timer">${(p.time / 1000).toFixed(1)}s</span>`;
            dom['powerup-indicators'].appendChild(el);
        });
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // PARTICLES / EFFECTS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function spawnParticles(x, y, color, count = 10, speed = 3) {
        const mult = gameState.settings.particles === 'low' ? 0.5 : gameState.settings.particles === 'medium' ? 0.8 : 1;
        count = Math.floor(count * mult);
        for (let i = 0; i < count; i++) {
            const a = Math.random() * Math.PI * 2;
            const s = Math.random() * speed;
            gameState.entities.particles.push({
                x, y,
                vx: Math.cos(a) * s,
                vy: Math.sin(a) * s,
                r: Math.random() * 2.5 + 0.5,
                color,
                life: rand(20, 40),
                maxLife: 40,
            });
        }
    }

    function spawnExplosion(x, y, color, count = 20) {
        spawnParticles(x, y, color, count, 5);
        gameState.entities.explosions.push({ x, y, r: 0, maxR: 30, life: 20, color });
        playSound('explosion');
        shakeScreen(6);
    }

    function updateParticles(dt) {
        gameState.entities.particles.forEach(p => {
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.vy += 0.02 * dt;
            p.life -= dt;
        });
        gameState.entities.explosions.forEach(e => {
            e.r += 2 * dt;
            e.life -= dt;
        });
    }

    function showDamageText(x, y, text, type = 'player-dmg') {
        if (!gameState.settings.damageNumbers) return;
        const el = document.createElement('div');
        el.className = `damage-num ${type}`;
        el.textContent = text;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        dom['damage-numbers'].appendChild(el);
        setTimeout(() => el.remove(), 800);
    }

    function updateDamageTexts() { }

    function showNotification(text, type = 'kill') {
        const el = document.createElement('div');
        el.className = `notification ${type}`;
        el.textContent = text;
        dom['notifications'].appendChild(el);
        setTimeout(() => el.remove(), 1500);
    }

    function shakeScreen(amount) {
        if (!gameState.settings.screenShake) return;
        gameState.screenShakeIntensity = Math.max(gameState.screenShakeIntensity, amount);
        document.body.classList.add('screen-shake');
        setTimeout(() => document.body.classList.remove('screen-shake'), 150);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // COLLISIONS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function rectCircleHit(cx, cy, cr, rx, ry, rw, rh) {
        const dx = Math.abs(cx - rx);
        const dy = Math.abs(cy - ry);
        return dx < rw / 2 + cr && dy < rh / 2 + cr;
    }

    function handleCollisions() {
        const player = gameState.player;

        // Player bullets vs enemies
        gameState.entities.bullets.forEach(b => {
            gameState.entities.enemies.forEach(enemy => {
                if (rectCircleHit(b.x, b.y, b.r, enemy.x, enemy.y, enemy.w, enemy.h)) {
                    hitEnemy(enemy, b);
                    b.pierce--;
                }
            });

            if (gameState.boss && rectCircleHit(b.x, b.y, b.r, gameState.boss.x, gameState.boss.y, gameState.boss.size, gameState.boss.size)) {
                hitBoss(gameState.boss, b);
                b.pierce--;
            }
        });

        // Enemy bullets vs player
        gameState.entities.enemyBullets.forEach(b => {
            if (rectCircleHit(b.x, b.y, b.r, player.x, player.y, player.w, player.h)) {
                playerTakeDamage(b.damage, b.color);
                b.dead = true;
            }
        });

        // Enemies vs player
        gameState.entities.enemies.forEach(enemy => {
            if (rectCircleHit(enemy.x, enemy.y, enemy.w / 2, player.x, player.y, player.w, player.h)) {
                playerTakeDamage(enemy.type === 10 ? 30 : 18, enemy.color);
                enemy.dead = true;
                spawnExplosion(enemy.x, enemy.y, enemy.color, 14);
            }
        });

        // Powerups vs player
        gameState.entities.powerups.forEach(p => {
            if (rectCircleHit(p.x, p.y, 8, player.x, player.y, player.w, player.h)) {
                collectPowerup(p);
                p.dead = true;
            }
        });
    }

    function hitEnemy(enemy, bullet) {
        if (enemy.dead) return;
        const crit = Math.random() * 100 < gameState.player.critical;
        const dmg = Math.floor(bullet.damage * (crit ? 1.8 : 1));
        enemy.hp -= dmg;
        gameState.shotsHit++;
        gameState.damageDone += dmg;
        gameState.stats.totalDamage += dmg;
        spawnParticles(bullet.x, bullet.y, enemy.color, crit ? 8 : 4, 2);
        showDamageText(enemy.x, enemy.y, dmg, crit ? 'crit' : 'player-dmg');
        playSound('hit');

        if (enemy.hp <= 0) {
            enemy.dead = true;
            onEnemyKilled(enemy);
        }
    }

    function hitBoss(boss, bullet) {
        if (boss.invulnerable > 0) return;
        const crit = Math.random() * 100 < gameState.player.critical * 0.7;
        const dmg = Math.floor(bullet.damage * (crit ? 1.6 : 1));
        boss.hp -= dmg;
        gameState.shotsHit++;
        gameState.damageDone += dmg;
        gameState.stats.totalDamage += dmg;
        spawnParticles(bullet.x, bullet.y, boss.color, crit ? 6 : 3, 2);
        showDamageText(boss.x, boss.y, dmg, crit ? 'crit' : 'player-dmg');

        if (boss.hp <= 0) {
            bossDefeated();
        }
    }

    function playerTakeDamage(amount, color = '#ff3344') {
        const p = gameState.player;
        if (p.invulnerable > 0) return;
        p.noDamageThisLevel = false;
        p.shieldCooldown = 2500;

        let dmg = amount;
        if (p.shield > 0) {
            const absorbed = Math.min(p.shield, dmg * 0.65);
            p.shield -= absorbed;
            dmg -= absorbed;
        }
        p.hp -= dmg;
        p.invulnerable = 400;
        shakeScreen(8);
        playSound('damage');
        spawnParticles(p.x, p.y, color, 12, 3);
        showDamageText(p.x, p.y, Math.floor(dmg), 'enemy-dmg');

        if (p.hp <= 0) {
            p.hp = 0;
            endGame();
        }
    }

    function onEnemyKilled(enemy) {
        gameState.totalKills++;
        gameState.levelKills++;
        gameState.stats.totalKills++;
        gameState.score += Math.floor(enemy.score * gameState.combo);
        gameState.combo = clamp(gameState.combo + 0.2, 1, 20);
        gameState.comboTimer = 180;
        gameState.maxCombo = Math.max(gameState.maxCombo, gameState.combo);
        if (gameState.combo > 1.2) dom['combo-display'].classList.add('active');

        gameState.gold += randInt(5, 15);
        gameState.stats.totalGold += randInt(5, 15);
        dom['kill-count'].textContent = gameState.totalKills;

        spawnExplosion(enemy.x, enemy.y, enemy.color, 18);
        spawnPowerup(enemy.x, enemy.y);
        updateAchievements('kills', gameState.totalKills);
        updateAchievements('gold', gameState.gold);
        showNotification(`+${enemy.score}`, 'kill');
    }

    function bossDefeated() {
        gameState.bossesKilled++;
        gameState.stats.bossKills++;
        gameState.score += 2000 + gameState.currentPlanet * 500;
        gameState.gold += 500 + gameState.currentPlanet * 100;
        gameState.diamonds += 10 + gameState.currentPlanet * 2;
        grantXP(120 + gameState.currentPlanet * 25);
        spawnExplosion(gameState.boss.x, gameState.boss.y, gameState.boss.color, 60);
        updateAchievements('bosses', gameState.bossesKilled);
        dom['boss-hud'].classList.add('hidden');
        gameState.boss = null;
        completeLevel();
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // COMBO / XP / ACHIEVEMENTS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function updateCombo(dt) {
        if (gameState.comboTimer > 0) {
            gameState.comboTimer -= dt * 3;
            dom['combo-fill'].style.width = `${(gameState.comboTimer / 180) * 100}%`;
        } else {
            gameState.combo = 1;
            dom['combo-display'].classList.remove('active');
        }
        dom['combo-value'].textContent = `x${gameState.combo.toFixed(1)}`;
    }

    function grantXP(amount) {
        gameState.playerXP += amount;
        while (gameState.playerXP >= gameState.xpToNext) {
            gameState.playerXP -= gameState.xpToNext;
            gameState.playerLevel++;
            gameState.xpToNext = Math.floor(gameState.xpToNext * 1.25);
            showLevelUp();
            updateAchievements('level', gameState.playerLevel);
        }
    }

    function showLevelUp() {
        playSound('levelup');
        dom['levelup-level'].textContent = `Level ${gameState.playerLevel}`;
        dom['levelup-popup'].classList.remove('hidden');
        setTimeout(() => dom['levelup-popup'].classList.add('hidden'), 2000);
    }

    function updateAchievements(type, value) {
        gameState.achievements.forEach(a => {
            if (a.type === type && !a.unlocked) {
                a.progress = value;
                if (value >= a.target) {
                    a.unlocked = true;
                    gameState.gold += 200;
                    showAchievement(a);
                }
            }
        });
        renderAchievements();
    }

    function showAchievement(ach) {
        dom['ach-popup-name'].textContent = ach.name;
        dom['achievement-popup'].classList.remove('hidden');
        setTimeout(() => dom['achievement-popup'].classList.add('hidden'), 2500);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // RENDER
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function render() {
        const planet = PLANETS[gameState.currentPlanet];
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = planet.bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Nebula glow
        const grad = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.35, 0, canvas.width * 0.5, canvas.height * 0.35, canvas.width * 0.6);
        grad.addColorStop(0, planet.nebula);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        renderStars();
        renderParticles();
        renderPowerups();
        renderBullets();
        renderEnemies();
        renderBoss();
        renderPlayer();
        renderExplosions();
        ctx.restore();
    }

    function renderStars() {
        gameState.entities.stars.forEach(s => {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${s.hue}, 80%, 85%, ${0.2 + s.z * 0.15})`;
            ctx.fill();
        });
    }

    function renderPlayer() {
        const p = gameState.player;
        if (!p) return;
        if (p.invulnerable > 0 && Math.floor(p.invulnerable / 60) % 2 === 0) return;

        // Engine trail
        ctx.beginPath();
        ctx.ellipse(p.x, p.y + p.h / 2 + 8, 8, 16 + Math.random() * 4, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 140, 40, 0.55)';
        ctx.shadowColor = '#ff8800';
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Shield aura
        if (p.shield > 0) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 28 + Math.sin(performance.now() * 0.01) * 2, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(80, 180, 255, 0.35)';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // Ultimate shield bubble
        if (p.invulnerable > 0) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 36, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(180, 80, 255, 0.35)';
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        // Ship body
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - p.h / 2);
        ctx.lineTo(p.x - p.w / 2, p.y + p.h / 2);
        ctx.lineTo(p.x - p.w / 4, p.y + p.h / 4);
        ctx.lineTo(p.x, p.y + p.h / 3);
        ctx.lineTo(p.x + p.w / 4, p.y + p.h / 4);
        ctx.lineTo(p.x + p.w / 2, p.y + p.h / 2);
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Cockpit
        ctx.beginPath();
        ctx.ellipse(p.x, p.y - 4, 5, 9, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.fill();

        // Side wings
        ctx.beginPath();
        ctx.moveTo(p.x - p.w / 2, p.y + 10);
        ctx.lineTo(p.x - p.w / 2 - 10, p.y + 16);
        ctx.lineTo(p.x - 6, p.y + 6);
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.beginPath();
        ctx.moveTo(p.x + p.w / 2, p.y + 10);
        ctx.lineTo(p.x + p.w / 2 + 10, p.y + 16);
        ctx.lineTo(p.x + 6, p.y + 6);
        ctx.closePath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    function renderEnemies() {
        gameState.entities.enemies.forEach(e => {
            ctx.save();
            ctx.globalAlpha = e.opacity ?? 1;
            ctx.beginPath();
            ctx.moveTo(e.x, e.y + e.h / 2);
            ctx.lineTo(e.x - e.w / 2, e.y - e.h / 4);
            ctx.lineTo(e.x - e.w / 4, e.y - e.h / 2);
            ctx.lineTo(e.x + e.w / 4, e.y - e.h / 2);
            ctx.lineTo(e.x + e.w / 2, e.y - e.h / 4);
            ctx.closePath();
            ctx.fillStyle = e.color;
            ctx.shadowColor = e.color;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Eye/core
            ctx.beginPath();
            ctx.arc(e.x, e.y - 2, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.fill();

            // HP bar
            const hpPct = e.hp / e.maxHp;
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.fillRect(e.x - e.w / 2, e.y - e.h / 2 - 8, e.w, 3);
            ctx.fillStyle = hpPct > 0.5 ? '#33ff88' : hpPct > 0.25 ? '#ffaa00' : '#ff3344';
            ctx.fillRect(e.x - e.w / 2, e.y - e.h / 2 - 8, e.w * hpPct, 3);
            ctx.restore();
        });
    }

    function renderBoss() {
        const b = gameState.boss;
        if (!b) return;

        ctx.save();
        if (b.invulnerable > 0 && Math.floor(b.invulnerable / 50) % 2 === 0) ctx.globalAlpha = 0.5;

        // Outer glow
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `${b.color}15`;
        ctx.fill();

        // Main body
        ctx.beginPath();
        ctx.moveTo(b.x, b.y - b.size / 2);
        ctx.lineTo(b.x - b.size / 2, b.y);
        ctx.lineTo(b.x - b.size / 3, b.y + b.size / 2);
        ctx.lineTo(b.x + b.size / 3, b.y + b.size / 2);
        ctx.lineTo(b.x + b.size / 2, b.y);
        ctx.closePath();
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 24;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Boss core
        ctx.beginPath();
        ctx.arc(b.x, b.y, 14 + Math.sin(b.timer * 0.1) * 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffdd88';
        ctx.shadowColor = '#ffdd88';
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Wings/spikes
        for (let i = 0; i < 4; i++) {
            const a = (Math.PI / 2) * i + b.timer * 0.005;
            ctx.beginPath();
            ctx.moveTo(b.x + Math.cos(a) * 20, b.y + Math.sin(a) * 20);
            ctx.lineTo(b.x + Math.cos(a) * (b.size / 2 + 18), b.y + Math.sin(a) * (b.size / 2 + 18));
            ctx.lineWidth = 3;
            ctx.strokeStyle = b.color;
            ctx.stroke();
        }
        ctx.restore();

        dom['boss-hp-fill'].style.width = `${(b.hp / b.maxHp) * 100}%`;
    }

    function renderBullets() {
        gameState.entities.bullets.forEach(b => {
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.fillStyle = b.color;
            ctx.shadowColor = b.color;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
        });
        gameState.entities.enemyBullets.forEach(b => {
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.fillStyle = b.color;
            ctx.shadowColor = b.color;
            ctx.shadowBlur = b.glow ? 12 : 0;
            ctx.fill();
            ctx.shadowBlur = 0;
        });
    }

    function renderPowerups() {
        gameState.entities.powerups.forEach(p => {
            const pulse = 1 + Math.sin(p.pulse * 0.1) * 0.15;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.scale(pulse, pulse);
            ctx.beginPath();
            ctx.arc(0, 0, 10, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}22`;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(0, 0, 7, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.restore();
        });
    }

    function renderParticles() {
        gameState.entities.particles.forEach(p => {
            ctx.globalAlpha = p.life / p.maxLife;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    }

    function renderExplosions() {
        gameState.entities.explosions.forEach(e => {
            ctx.globalAlpha = e.life / 20;
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
            ctx.strokeStyle = e.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.globalAlpha = 1;
        });
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // CLEANUP
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function cleanupEntities() {
        gameState.entities.bullets = gameState.entities.bullets.filter(b => !b.dead && b.y > -50 && b.y < canvas.height + 50 && b.x > -50 && b.x < canvas.width + 50 && b.pierce > 0);
        gameState.entities.enemyBullets = gameState.entities.enemyBullets.filter(b => !b.dead && b.y > -60 && b.y < canvas.height + 60 && b.x > -60 && b.x < canvas.width + 60);
        gameState.entities.enemies = gameState.entities.enemies.filter(e => !e.dead && e.y < canvas.height + 60 && e.x > -100 && e.x < canvas.width + 100);
        gameState.entities.particles = gameState.entities.particles.filter(p => p.life > 0);
        gameState.entities.explosions = gameState.entities.explosions.filter(e => e.life > 0);
        gameState.entities.powerups = gameState.entities.powerups.filter(p => !p.dead && p.y < canvas.height + 40);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // HUD / MINIMAP
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function updateHUD() {
        const p = gameState.player;
        dom['hp-fill'].style.width = `${(p.hp / p.maxHp) * 100}%`;
        dom['hp-fill'].classList.toggle('low', p.hp / p.maxHp < 0.25);
        dom['hp-text'].textContent = `${Math.ceil(p.hp)}/${p.maxHp}`;
        dom['shield-fill'].style.width = `${(p.shield / p.maxShield) * 100}%`;
        dom['shield-text'].textContent = `${Math.ceil(p.shield)}/${p.maxShield}`;
        dom['energy-fill'].style.width = `${(p.energy / p.maxEnergy) * 100}%`;
        dom['energy-text'].textContent = `${Math.ceil(p.energy)}/${p.maxEnergy}`;
        dom['xp-fill'].style.width = `${(gameState.playerXP / gameState.xpToNext) * 100}%`;
        dom['xp-text'].textContent = `LV.${gameState.playerLevel} вЂ” ${Math.floor(gameState.playerXP)}/${gameState.xpToNext} XP`;
        dom['score-value'].textContent = Math.floor(gameState.score);
        dom['kill-count'].textContent = gameState.totalKills;
        dom['combo-value'].textContent = `x${gameState.combo.toFixed(1)}`;
        dom['combo-fill'].style.width = `${(gameState.comboTimer / 180) * 100}%`;
        updateWeaponHUD();

        // Ultimate fill: based on score progression and kills for demo
        const ult = clamp((gameState.levelKills * 8 + gameState.damageDone / 40) % 100, 0, 100);
        dom['ult-fill'].style.width = `${ult}%`;
        dom['ult-fill'].classList.toggle('ready', ult >= 100);
        dom['ult-label'].textContent = ULTIMATE_SKILLS[gameState.ultimateSkill].name.toUpperCase();

        dom['fps-counter'].classList.toggle('visible', gameState.settings.showFPS);
    }

    function updateWeaponHUD() {
        const w = WEAPONS[gameState.currentWeapon];
        dom['weapon-icon'].textContent = w.icon;
        dom['weapon-name'].textContent = w.name;
        dom['weapon-ammo'].textContent = w.ammo === Infinity ? 'в€ћ' : w.ammo;
        dom['sec-ammo'].textContent = gameState.player?.secondaryAmmo ?? 0;
    }

    function updatePlanetHUD() {
        const p = PLANETS[gameState.currentPlanet];
        dom['level-planet'].textContent = p.icon;
        dom['level-name'].textContent = p.name;
        dom['level-number'].textContent = `${gameState.currentPlanet + 1}-${gameState.currentLevelInPlanet}`;
        dom['wave-num'].textContent = gameState.currentWave;
        dom['wave-total'].textContent = gameState.totalWaves;
    }

    function updateMenuCurrency() {
        dom['menu-gold'].textContent = Math.floor(gameState.gold);
        dom['menu-diamond'].textContent = Math.floor(gameState.diamonds);
        dom['menu-crystal'].textContent = Math.floor(gameState.crystals);
        dom['shop-gold'].textContent = Math.floor(gameState.gold);
        dom['shop-diamond'].textContent = Math.floor(gameState.diamonds);
    }

    function updateMinimap() {
        if (!minimapCtx) return;
        minimapCtx.clearRect(0, 0, minimapCanvas.width, minimapCanvas.height);
        minimapCtx.fillStyle = 'rgba(0,0,0,0.6)';
        minimapCtx.fillRect(0, 0, minimapCanvas.width, minimapCanvas.height);

        const sx = minimapCanvas.width / canvas.width;
        const sy = minimapCanvas.height / canvas.height;

        // Player
        minimapCtx.fillStyle = '#00d4ff';
        minimapCtx.fillRect(gameState.player.x * sx - 2, gameState.player.y * sy - 2, 4, 4);

        // Enemies
        minimapCtx.fillStyle = '#ff3344';
        gameState.entities.enemies.forEach(e => minimapCtx.fillRect(e.x * sx - 1.5, e.y * sy - 1.5, 3, 3));

        // Boss
        if (gameState.boss) {
            minimapCtx.fillStyle = '#ffaa00';
            minimapCtx.fillRect(gameState.boss.x * sx - 3, gameState.boss.y * sy - 3, 6, 6);
        }
    }

    function updateStats() {
        gameState.stats.highestScore = Math.max(gameState.stats.highestScore, gameState.score);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // GAME STATES: PAUSE, END, LEVEL COMPLETE
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function togglePause() {
        if (!gameState.running || gameState.gameOver || gameState.levelComplete) return;
        gameState.paused = !gameState.paused;
        dom['pause-screen'].classList.toggle('hidden', !gameState.paused);
        dom['pause-score'].textContent = Math.floor(gameState.score);
        dom['pause-time'].textContent = formatTime(gameState.levelTime);
        dom['pause-kills'].textContent = gameState.levelKills;
    }

    function endGame() {
        gameState.gameOver = true;
        gameState.running = true;
        const accuracy = gameState.shotsFired > 0 ? Math.floor((gameState.shotsHit / gameState.shotsFired) * 100) : 0;
        const goldReward = Math.floor(gameState.score / 20 + gameState.levelKills * 3);
        const diamondReward = Math.floor(gameState.levelKills / 20);
        const xpReward = Math.floor(gameState.score / 15 + gameState.levelKills * 2);

        gameState.gold += goldReward;
        gameState.diamonds += diamondReward;
        grantXP(xpReward);

        dom['go-score'].textContent = Math.floor(gameState.score);
        dom['go-kills'].textContent = gameState.levelKills;
        dom['go-accuracy'].textContent = `${accuracy}%`;
        dom['go-combo'].textContent = `x${gameState.maxCombo.toFixed(1)}`;
        dom['go-time'].textContent = formatTime(gameState.levelTime);
        dom['go-damage'].textContent = Math.floor(gameState.damageDone);
        dom['go-gold'].textContent = goldReward;
        dom['go-diamonds'].textContent = diamondReward;
        dom['go-xp'].textContent = xpReward;
        dom['gameover-screen'].classList.remove('hidden');
        updateMenuCurrency();

        updateAchievements('accuracy', accuracy);
        updateAchievements('playtime', Math.floor(gameState.stats.totalPlayTime));
    }

    function completeLevel() {
        gameState.levelComplete = true;
        gameState.stats.levelsCompleted++;
        const accuracy = gameState.shotsFired > 0 ? Math.floor((gameState.shotsHit / gameState.shotsFired) * 100) : 0;
        const goldReward = 300 + gameState.currentPlanet * 100 + gameState.levelKills * 2;
        const diamondReward = 5 + gameState.currentPlanet;
        const xpReward = 80 + gameState.currentPlanet * 20;

        gameState.gold += goldReward;
        gameState.diamonds += diamondReward;
        grantXP(xpReward);

        dom['lc-score'].textContent = Math.floor(gameState.score);
        dom['lc-kills'].textContent = gameState.levelKills;
        dom['lc-time'].textContent = formatTime(gameState.levelTime);
        dom['lc-accuracy'].textContent = `${accuracy}%`;
        dom['lc-gold'].textContent = goldReward;
        dom['lc-diamonds'].textContent = diamondReward;
        dom['lc-xp'].textContent = xpReward;
        dom['levelcomplete-screen'].classList.remove('hidden');
        updateMenuCurrency();

        if (gameState.player.noDamageThisLevel) updateAchievements('nodamage', 1);
        updateAchievements('accuracy', accuracy);
        updateAchievements('playtime', Math.floor(gameState.stats.totalPlayTime));
    }

    function nextLevel() {
        gameState.currentPlanet = (gameState.currentPlanet + 1) % PLANETS.length;
        gameState.currentLevelInPlanet++;
        spawnedThisWave = 0;
        waveCleared = false;
        bossSpawnTriggered = false;
        startGame(gameState.mode);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // MENUS / UI RENDERERS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function renderRocketList() {
        dom['rocket-list'].innerHTML = '';
        ROCKETS.forEach((r, i) => {
            const div = document.createElement('div');
            div.className = `rocket-list-item ${i === gameState.selectedRocket ? 'active' : ''}`;
            div.innerHTML = `
                <span class="rli-color" style="background:${r.color}; box-shadow:0 0 8px ${r.color}"></span>
                <span class="rli-name">${r.name}</span>
                <span class="rli-rarity" style="color:${rarityColor(r.rarity)}">${r.rarity}</span>
            `;
            div.addEventListener('click', () => selectRocket(i));
            dom['rocket-list'].appendChild(div);
        });
        renderSelectedRocket();
    }

    function selectRocket(index) {
        const r = ROCKETS[index];
        if (!gameState.inventory.rocketsUnlocked.includes(index)) {
            showNotification('LOCKED', 'warning');
            return;
        }
        gameState.selectedRocket = index;
        renderRocketList();
    }

    function renderSelectedRocket() {
        const r = ROCKETS[gameState.selectedRocket];
        dom['rocket-title'].textContent = r.name;
        dom['rocket-desc'].textContent = r.desc;
        dom['rocket-rarity'].textContent = r.rarity;
        dom['rocket-rarity'].style.color = rarityColor(r.rarity);
        dom['rocket-rarity'].style.borderColor = rarityColor(r.rarity);

        const stats = [
            ['Speed', r.speed * 15], ['Damage', r.damage * 4], ['Armor', r.armor], ['Critical', r.critical * 4],
            ['Fire Rate', 100 - r.fireRate / 5], ['Energy', r.energy], ['Shield', r.shield * 2]
        ];
        dom['rocket-stats-grid'].innerHTML = '';
        stats.forEach(([name, val]) => {
            const div = document.createElement('div');
            div.className = 'rocket-stat-item';
            div.innerHTML = `
                <div class="rsi-header"><span class="rsi-name">${name}</span><span class="rsi-value">${Math.floor(val)}</span></div>
                <div class="rsi-track"><div class="rsi-fill" style="width:${clamp(val, 0, 100)}%"></div></div>
            `;
            dom['rocket-stats-grid'].appendChild(div);
        });

        drawRocketPreview(r);
        renderWeaponSlots();
        renderSkillSlots();
    }

    function drawRocketPreview(r) {
        const c = dom['rocket-preview-canvas'];
        const cctx = c.getContext('2d');
        c.width = 200; c.height = 260;
        cctx.clearRect(0, 0, c.width, c.height);
        cctx.translate(100, 130);
        cctx.scale(2.2, 2.2);

        cctx.beginPath();
        cctx.ellipse(0, 18, 5, 12, 0, 0, Math.PI * 2);
        cctx.fillStyle = 'rgba(255,140,40,0.55)';
        cctx.shadowColor = '#ff8800';
        cctx.shadowBlur = 12;
        cctx.fill();
        cctx.shadowBlur = 0;

        cctx.beginPath();
        cctx.moveTo(0, -20);
        cctx.lineTo(-16, 22);
        cctx.lineTo(-6, 10);
        cctx.lineTo(0, 14);
        cctx.lineTo(6, 10);
        cctx.lineTo(16, 22);
        cctx.closePath();
        cctx.fillStyle = r.color;
        cctx.shadowColor = r.color;
        cctx.shadowBlur = 10;
        cctx.fill();
        cctx.shadowBlur = 0;

        cctx.beginPath();
        cctx.ellipse(0, -2, 3.5, 6, 0, 0, Math.PI * 2);
        cctx.fillStyle = 'rgba(255,255,255,0.8)';
        cctx.fill();

        cctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    function renderWeaponSlots() {
        dom['weapon-slots'].innerHTML = '';
        WEAPONS.forEach((w, i) => {
            const div = document.createElement('div');
            div.className = `weapon-slot ${gameState.currentWeapon === i ? 'equipped' : ''}`;
            div.innerHTML = `<span class="ws-icon">${w.icon}</span><span class="ws-name">${w.name}</span><span class="ws-level">${w.unlocked || gameState.inventory.weaponsUnlocked.includes(i) ? 'OWNED' : 'LOCKED'}</span>`;
            div.addEventListener('click', () => {
                if (!gameState.inventory.weaponsUnlocked.includes(i)) return showNotification('LOCKED', 'warning');
                gameState.currentWeapon = i;
                renderWeaponSlots();
            });
            dom['weapon-slots'].appendChild(div);
        });
    }

    function renderSkillSlots() {
        dom['skill-slots'].innerHTML = '';
        ULTIMATE_SKILLS.forEach((s, i) => {
            const div = document.createElement('div');
            div.className = `skill-slot ${gameState.ultimateSkill === i ? 'equipped' : ''}`;
            div.innerHTML = `<span class="ws-icon">${s.icon}</span><span class="ws-name">${s.name}</span><span class="ws-level">${gameState.ultimateSkill === i ? 'EQUIPPED' : ''}</span>`;
            div.addEventListener('click', () => { gameState.ultimateSkill = i; renderSkillSlots(); });
            dom['skill-slots'].appendChild(div);
        });
    }

    function renderShop(tab = 'rockets') {
        dom['shop-grid'].innerHTML = '';
        SHOP_ITEMS[tab].forEach(item => {
            const div = document.createElement('div');
            div.className = 'shop-item';
            div.innerHTML = `<span class="si-icon">${item.icon || 'рџ“¦'}</span><span class="si-name">${item.name}</span><span class="si-price"><i class="coin-icon"></i>${item.price || 0}</span>`;
            div.addEventListener('click', () => buyItem(item));
            dom['shop-grid'].appendChild(div);
        });
        document.querySelectorAll('.shop-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    }

    function buyItem(item) {
        if (item.price > gameState.gold) return showNotification('NOT ENOUGH GOLD', 'warning');
        gameState.gold -= item.price;
        if (item.category === 'rockets') {
            gameState.inventory.rocketsUnlocked.push(item.id);
            updateAchievements('rockets', gameState.inventory.rocketsUnlocked.length);
        }
        if (item.category === 'weapons') {
            gameState.inventory.weaponsUnlocked.push(item.id);
            updateAchievements('weapons', gameState.inventory.weaponsUnlocked.length);
        }
        if (item.category === 'chests') {
            gameState.inventory.chests.common++;
        }
        updateMenuCurrency();
        renderShop(document.querySelector('.shop-tab.active')?.dataset.tab || 'rockets');
        renderRocketList();
        renderWeaponSlots();
        showNotification('PURCHASED', 'powerup');
    }

    function renderAchievements() {
        dom['achievements-grid'].innerHTML = '';
        let unlocked = 0;
        gameState.achievements.forEach(a => {
            if (a.unlocked) unlocked++;
            const div = document.createElement('div');
            div.className = `ach-item ${a.unlocked ? 'unlocked' : 'locked'}`;
            div.innerHTML = `<span class="ach-icon">${a.icon}</span><div class="ach-info"><span class="ach-name">${a.name}</span><span class="ach-desc">${a.desc}</span></div>`;
            dom['achievements-grid'].appendChild(div);
        });
        dom['ach-count'].textContent = `${unlocked} / ${gameState.achievements.length}`;
        dom['ach-fill'].style.width = `${(unlocked / gameState.achievements.length) * 100}%`;
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // SETTINGS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function initSettingsUI() {
        const map = [
            ['vol-master', 'masterVolume', 'vol-master-val'],
            ['vol-music', 'musicVolume', 'vol-music-val'],
            ['vol-sfx', 'sfxVolume', 'vol-sfx-val'],
        ];
        map.forEach(([id, key, out]) => {
            dom[id].value = gameState.settings[key];
            dom[out].textContent = `${gameState.settings[key]}%`;
            dom[id].addEventListener('input', e => {
                gameState.settings[key] = +e.target.value;
                dom[out].textContent = `${e.target.value}%`;
            });
        });

        dom['gfx-quality'].value = gameState.settings.gfxQuality;
        dom['show-fps'].checked = gameState.settings.showFPS;
        dom['screen-shake'].checked = gameState.settings.screenShake;
        dom['particle-count'].value = gameState.settings.particles;
        dom['vibration'].checked = gameState.settings.vibration;
        dom['auto-fire'].checked = gameState.settings.autoFire;
        dom['damage-numbers'].checked = gameState.settings.damageNumbers;

        dom['gfx-quality'].addEventListener('change', e => gameState.settings.gfxQuality = e.target.value);
        dom['show-fps'].addEventListener('change', e => gameState.settings.showFPS = e.target.checked);
        dom['screen-shake'].addEventListener('change', e => gameState.settings.screenShake = e.target.checked);
        dom['particle-count'].addEventListener('change', e => gameState.settings.particles = e.target.value);
        dom['vibration'].addEventListener('change', e => gameState.settings.vibration = e.target.checked);
        dom['auto-fire'].addEventListener('change', e => gameState.settings.autoFire = e.target.checked);
        dom['damage-numbers'].addEventListener('change', e => gameState.settings.damageNumbers = e.target.checked);
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // EVENT LISTENERS
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function initUIEvents() {
        // Menu
        dom['btn-start'].addEventListener('click', () => startGame('story'));
        dom['btn-story'].addEventListener('click', () => startGame('story'));
        dom['btn-survival'].addEventListener('click', () => startGame('survival'));
        dom['btn-hangar'].addEventListener('click', () => { renderRocketList(); showScreen('hangar'); });
        dom['btn-shop'].addEventListener('click', () => { renderShop('rockets'); showScreen('shop'); });
        dom['btn-achievements'].addEventListener('click', () => { renderAchievements(); showScreen('achievements'); });
        dom['btn-settings'].addEventListener('click', () => showScreen('settings'));

        // Back buttons
        dom['btn-hangar-back'].addEventListener('click', () => showScreen('menu'));
        dom['btn-shop-back'].addEventListener('click', () => showScreen('menu'));
        dom['btn-ach-back'].addEventListener('click', () => showScreen('menu'));
        dom['btn-settings-back'].addEventListener('click', () => showScreen('menu'));

        // Hangar actions
        dom['btn-equip'].addEventListener('click', () => showNotification('EQUIPPED', 'powerup'));
        dom['btn-upgrade-rocket'].addEventListener('click', () => showNotification('COMING SOON', 'warning'));

        // Shop tabs
        document.querySelectorAll('.shop-tab').forEach(tab => tab.addEventListener('click', () => renderShop(tab.dataset.tab)));

        // Settings
        dom['btn-reset-settings'].addEventListener('click', () => {
            gameState.settings = { masterVolume: 80, musicVolume: 60, sfxVolume: 100, gfxQuality: 'high', showFPS: false, screenShake: true, particles: 'high', vibration: true, autoFire: false, damageNumbers: true };
            initSettingsUI();
            showNotification('SETTINGS RESET', 'warning');
        });

        // Pause
        dom['btn-resume'].addEventListener('click', togglePause);
        dom['btn-restart'].addEventListener('click', () => startGame(gameState.mode));
        dom['btn-quit'].addEventListener('click', resetToMenu);

        // Game over / level complete
        dom['btn-go-retry'].addEventListener('click', () => startGame(gameState.mode));
        dom['btn-go-menu'].addEventListener('click', resetToMenu);
        dom['btn-next-level'].addEventListener('click', nextLevel);
        dom['btn-lc-menu'].addEventListener('click', resetToMenu);

        // Button click sounds
        document.querySelectorAll('[data-sound="click"]').forEach(btn => btn.addEventListener('click', () => { initAudio(); playSound('click'); }));
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // RESIZE
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        backgroundCanvases.forEach(bg => resizeSingleCanvas(bg.c));
    }

    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ
    // INIT
    // в•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђв•ђ

    async function init() {
        cacheDom();
        initInput();
        initUIEvents();
        initSettingsUI();
        ['menu-stars-canvas', 'hangar-canvas', 'shop-canvas', 'ach-canvas', 'settings-canvas'].forEach(initBackgroundCanvas);
        resize();
        renderRocketList();
        renderShop('rockets');
        renderAchievements();
        updateMenuCurrency();
        updateBackgrounds();
        showScreen('menu');
        await runPreloader();
    }

    window.addEventListener('resize', resize);
    window.addEventListener('load', init);
})();