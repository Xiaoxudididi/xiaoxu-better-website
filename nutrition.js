const foodDatabase = {
    grains: [
        { name: '燕麦片', calories: 389, protein: 17, carbs: 66, fat: 7, serving: '100g', tags: ['vegan', 'vegetarian', 'easy-cook', 'canteen', 'takeout'] },
        { name: '糙米', calories: 348, protein: 7, carbs: 77, fat: 1, serving: '100g', tags: ['vegan', 'vegetarian', 'easy-cook'] },
        { name: '白米饭', calories: 130, protein: 2.7, carbs: 28, fat: 0.3, serving: '100g', tags: ['vegan', 'vegetarian', 'low-fat', 'canteen', 'takeout'] },
        { name: '全麦面包', calories: 260, protein: 9, carbs: 48, fat: 3, serving: '100g', tags: ['vegan', 'vegetarian', 'canteen', 'takeout'] },
        { name: '玉米', calories: 106, protein: 3.2, carbs: 22, fat: 1.2, serving: '100g', tags: ['vegan', 'vegetarian', 'easy-cook', 'canteen'] },
        { name: '小米', calories: 345, protein: 9, carbs: 73, fat: 3, serving: '100g', tags: ['vegan', 'vegetarian', 'easy-cook'] },
        { name: '红薯', calories: 86, protein: 1.6, carbs: 20, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'low-fat', 'easy-cook', 'canteen'] },
        { name: '全麦馒头', calories: 223, protein: 7, carbs: 47, fat: 1, serving: '100g', tags: ['vegan', 'vegetarian', 'canteen', 'takeout'] },
        { name: '燕麦粥', calories: 68, protein: 2.4, carbs: 12, fat: 1.1, serving: '100g', tags: ['vegan', 'vegetarian', 'easy-cook', 'canteen'] },
        { name: '荞麦面', calories: 340, protein: 10, carbs: 70, fat: 2.5, serving: '100g', tags: ['vegan', 'vegetarian', 'canteen', 'takeout'] },
        { name: '藜麦', calories: 340, protein: 14, carbs: 64, fat: 3, serving: '100g', tags: ['vegan', 'vegetarian', 'high-protein', 'city'] },
        { name: '全麦意面', calories: 350, protein: 13, carbs: 72, fat: 1.5, serving: '100g', tags: ['vegan', 'vegetarian'] }
    ],
    proteins: [
        { name: '鸡胸肉', calories: 165, protein: 31, carbs: 0, fat: 3.6, serving: '100g', tags: ['high-protein', 'low-fat', 'canteen', 'takeout'] },
        { name: '瘦牛肉', calories: 125, protein: 26, carbs: 0, fat: 2.4, serving: '100g', tags: ['high-protein', 'low-fat', 'canteen', 'takeout'] },
        { name: '鱼肉', calories: 120, protein: 25, carbs: 0, fat: 2, serving: '100g', tags: ['high-protein', 'low-fat', 'seafood', 'city'] },
        { name: '虾', calories: 80, protein: 18, carbs: 0, fat: 0.6, serving: '100g', tags: ['high-protein', 'low-fat', 'seafood', 'city'] },
        { name: '鸡蛋', calories: 143, protein: 13, carbs: 1.1, fat: 9.5, serving: '1个', tags: ['high-protein', 'easy-cook', 'canteen', 'takeout', 'town'] },
        { name: '牛奶', calories: 54, protein: 3.2, carbs: 4.8, fat: 3.2, serving: '100ml', tags: ['dairy', 'canteen', 'takeout', 'town'] },
        { name: '豆腐', calories: 69, protein: 6.2, carbs: 2, fat: 4.8, serving: '100g', tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '豆浆', calories: 30, protein: 2.8, carbs: 1.1, fat: 1.6, serving: '100ml', tags: ['vegan', 'vegetarian', 'easy-cook', 'canteen', 'town'] },
        { name: '三文鱼', calories: 208, protein: 20, carbs: 0, fat: 15, serving: '100g', tags: ['seafood', 'omega3', 'city'] },
        { name: '鳕鱼', calories: 82, protein: 20, carbs: 0, fat: 0.7, serving: '100g', tags: ['seafood', 'low-fat', 'high-protein', 'city'] },
        { name: '虾仁', calories: 99, protein: 20, carbs: 1, fat: 0.7, serving: '100g', tags: ['seafood', 'high-protein', 'low-fat', 'city'] },
        { name: '瘦猪肉', calories: 143, protein: 20, carbs: 0, fat: 6.2, serving: '100g', tags: ['high-protein', 'canteen', 'takeout', 'town'] },
        { name: '瘦羊肉', calories: 110, protein: 20, carbs: 0, fat: 3.2, serving: '100g', tags: ['high-protein', 'low-fat', 'canteen', 'town'] },
        { name: '希腊酸奶', calories: 59, protein: 10, carbs: 3.6, fat: 0.5, serving: '100g', tags: ['dairy', 'high-protein', 'low-fat', 'takeout'] },
        { name: '黑豆', calories: 341, protein: 23, carbs: 62, fat: 1.4, serving: '100g', tags: ['vegan', 'vegetarian', 'high-protein', 'canteen', 'takeout', 'town'] },
        { name: '鹰嘴豆', calories: 302, protein: 17, carbs: 57, fat: 2.6, serving: '100g', tags: ['vegan', 'vegetarian', 'town'] },
        { name: '红豆', calories: 300, protein: 20, carbs: 58, fat: 0.6, serving: '100g', tags: ['vegan', 'vegetarian', 'canteen', 'town'] },
        { name: '毛豆', calories: 123, protein: 12, carbs: 10, fat: 5, serving: '100g', tags: ['vegan', 'vegetarian', 'canteen', 'town'] }
    ],
    vegetables: [
        { name: '菠菜', calories: 28, protein: 2.6, carbs: 4.5, fat: 0.3, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'easy-cook', 'canteen', 'town'] },
        { name: '西兰花', calories: 34, protein: 2.8, carbs: 7, fat: 0.4, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'easy-cook', 'canteen'] },
        { name: '黄瓜', calories: 16, protein: 0.8, carbs: 2.9, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'easy-cook', 'takeout', 'town'] },
        { name: '西红柿', calories: 18, protein: 0.9, carbs: 3.5, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'easy-cook', 'canteen', 'town'] },
        { name: '胡萝卜', calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'easy-cook', 'canteen', 'town'] },
        { name: '芹菜', calories: 14, protein: 0.8, carbs: 2.5, fat: 0.1, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'easy-cook', 'canteen', 'town'] },
        { name: '生菜', calories: 16, protein: 1, carbs: 2.1, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'easy-cook', 'takeout', 'town'] },
        { name: '青椒', calories: 25, protein: 1.4, carbs: 5.4, fat: 0.3, serving: '100g', tags: ['vegan', 'vegetarian', 'easy-cook', 'canteen', 'town'] },
        { name: '蘑菇', calories: 26, protein: 3.1, carbs: 3.3, fat: 0.3, serving: '100g', tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '芦笋', calories: 27, protein: 2.2, carbs: 5, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'city'] },
        { name: '南瓜', calories: 26, protein: 0.9, carbs: 6.5, fat: 0.1, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'easy-cook', 'canteen', 'town'] },
        { name: '茄子', calories: 25, protein: 1.1, carbs: 5.8, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '卷心菜', calories: 25, protein: 1.5, carbs: 5.8, fat: 0.3, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'easy-cook', 'canteen', 'town'] },
        { name: '番茄', calories: 18, protein: 0.9, carbs: 3.5, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'easy-cook', 'takeout', 'town'] }
    ],
    fruits: [
        { name: '苹果', calories: 52, protein: 0.3, carbs: 14, fat: 0.2, serving: '1个', tags: ['vegan', 'vegetarian', 'low-glycemic', 'canteen', 'takeout', 'town'] },
        { name: '香蕉', calories: 91, protein: 1.1, carbs: 23, fat: 0.3, serving: '1个', tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '橙子', calories: 47, protein: 0.9, carbs: 12, fat: 0.2, serving: '1个', tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '蓝莓', calories: 57, protein: 0.7, carbs: 14, fat: 0.3, serving: '100g', tags: ['vegan', 'vegetarian', 'low-glycemic', 'city'] },
        { name: '草莓', calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'canteen', 'town'] },
        { name: '猕猴桃', calories: 61, protein: 1.2, carbs: 15, fat: 0.5, serving: '1个', tags: ['vegan', 'vegetarian', 'canteen', 'town'] },
        { name: '葡萄', calories: 40, protein: 0.7, carbs: 10, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '梨', calories: 58, protein: 0.4, carbs: 15, fat: 0.2, serving: '1个', tags: ['vegan', 'vegetarian', 'low-glycemic', 'canteen', 'takeout', 'town'] },
        { name: '柚子', calories: 42, protein: 0.8, carbs: 10, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'canteen', 'town'] },
        { name: '芒果', calories: 60, protein: 0.8, carbs: 15, fat: 0.4, serving: '100g', tags: ['vegan', 'vegetarian', 'city'] },
        { name: '火龙果', calories: 51, protein: 1.1, carbs: 13, fat: 0.2, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'city'] },
        { name: '木瓜', calories: 43, protein: 0.6, carbs: 10, fat: 0.1, serving: '100g', tags: ['vegan', 'vegetarian', 'city'] },
        { name: '桃子', calories: 42, protein: 0.9, carbs: 10, fat: 0.2, serving: '1个', tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '西瓜', calories: 30, protein: 0.6, carbs: 7.6, fat: 0.1, serving: '100g', tags: ['vegan', 'vegetarian', 'low-calorie', 'canteen', 'takeout', 'town'] }
    ],
    fats: [
        { name: '橄榄油', calories: 884, protein: 0, carbs: 0, fat: 100, serving: '10g', tags: ['healthy-fat', 'easy-cook', 'city'] },
        { name: '核桃', calories: 654, protein: 15, carbs: 14, fat: 65, serving: '20g(约2颗)', tags: ['healthy-fat', 'vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '杏仁', calories: 575, protein: 20, carbs: 20, fat: 50, serving: '20g(约15颗)', tags: ['healthy-fat', 'vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '牛油果', calories: 160, protein: 2, carbs: 9, fat: 15, serving: '1/4个', tags: ['healthy-fat', 'vegan', 'vegetarian', 'city'] },
        { name: '花生', calories: 567, protein: 25, carbs: 16, fat: 49, serving: '20g', tags: ['healthy-fat', 'vegan', 'vegetarian', 'canteen', 'takeout', 'town'] },
        { name: '亚麻籽', calories: 534, protein: 18, carbs: 28, fat: 42, serving: '10g', tags: ['healthy-fat', 'vegan', 'vegetarian', 'omega3', 'city'] },
        { name: '奇亚籽', calories: 510, protein: 17, carbs: 49, fat: 30, serving: '10g', tags: ['healthy-fat', 'vegan', 'vegetarian', 'omega3', 'city'] },
        { name: '葵花籽', calories: 584, protein: 21, carbs: 12, fat: 51, serving: '20g', tags: ['healthy-fat', 'vegan', 'vegetarian', 'canteen', 'takeout', 'town'] }
    ]
};

const recipeDatabase = {
    breakfast: [
        { 
            name: '燕麦牛奶鸡蛋', 
            description: '燕麦片1小碗(约80g) + 牛奶1杯(250ml) + 鸡蛋1个', 
            visual: '🥣🍳',
            tags: ['easy-cook', 'canteen', 'takeout', 'town', 'rural', 'moderate'],
            recipeId: 'oatmeal-egg'
        },
        { 
            name: '全麦面包配牛奶', 
            description: '全麦面包2片(约80g) + 牛奶1杯(250ml) + 苹果1个(中等大小)', 
            visual: '🍞🥛🍎',
            tags: ['canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'bread-milk'
        },
        { 
            name: '小米粥配鸡蛋', 
            description: '小米粥1碗(约100g) + 鸡蛋1个 + 凉拌黄瓜1根(约100g)', 
            visual: '🥣🍳🥒',
            tags: ['easy-cook', 'canteen', 'town', 'rural', 'simple'],
            recipeId: 'millet-porridge'
        },
        { 
            name: '豆浆配燕麦', 
            description: '豆浆1杯(250ml) + 燕麦片1小碗(约80g) + 橙子1个(中等大小)', 
            visual: '🥤🌾🍊',
            tags: ['vegan', 'vegetarian', 'easy-cook', 'canteen', 'takeout', 'town', 'rural', 'moderate'],
            recipeId: 'soy-oatmeal'
        },
        { 
            name: '玉米鸡蛋套餐', 
            description: '玉米1根(中等大小) + 鸡蛋1个 + 酸奶1小盒(100g)', 
            visual: '🌽🍳🥛',
            tags: ['easy-cook', 'canteen', 'town', 'rural', 'simple'],
            recipeId: 'corn-egg'
        },
        { 
            name: '燕麦粥配香蕉', 
            description: '燕麦粥1碗(约100g) + 香蕉1根(中等大小) + 鸡蛋1个', 
            visual: '🥣🍌🍳',
            tags: ['easy-cook', 'canteen', 'takeout', 'town', 'rural', 'moderate'],
            recipeId: 'oatmeal-banana'
        },
        { 
            name: '牛奶泡麦片', 
            description: '麦片1小碗(约50g) + 牛奶1杯(250ml)', 
            visual: '🥛🌾',
            tags: ['easy-cook', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'milk-cereal'
        }
    ],
    lunch: [
        { 
            name: '白米饭配鸡胸肉炒西兰花', 
            description: '白米饭1碗(约100g) + 鸡胸肉1块(约100g) + 西兰花1小颗(约150g)', 
            visual: '🍚🍗🥦',
            tags: ['high-protein', 'low-fat', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'chicken-broccoli'
        },
        { 
            name: '全麦馒头配番茄炒蛋', 
            description: '全麦馒头1个(约100g) + 鸡蛋2个 + 番茄1个(中等大小)', 
            visual: '🥠🍅🍳',
            tags: ['easy-cook', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'tomato-egg'
        },
        { 
            name: '糙米配豆腐炒青菜', 
            description: '糙米饭1碗(约100g) + 豆腐1块(约100g) + 青菜1把(约150g)', 
            visual: '🍚🧈🥬',
            tags: ['vegan', 'vegetarian', 'low-fat', 'easy-cook', 'canteen', 'town', 'rural', 'moderate'],
            recipeId: 'tofu-vegetables'
        },
        { 
            name: '米饭配瘦牛肉炒青椒', 
            description: '白米饭1碗(约100g) + 瘦牛肉100g + 青椒1个(约100g)', 
            visual: '🍚🥩🫑',
            tags: ['high-protein', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'beef-pepper'
        },
        { 
            name: '藜麦沙拉配虾仁', 
            description: '藜麦1小碗(约100g) + 虾仁100g + 生菜1把(约100g) + 番茄1个', 
            visual: '🥗🦐🍅',
            tags: ['high-protein', 'low-fat', 'city', 'complex'],
            recipeId: 'quinoa-shrimp'
        },
        { 
            name: '米饭配红烧豆腐', 
            description: '白米饭1碗(约100g) + 豆腐1块(约100g) + 蘑菇5-6朵 + 胡萝卜半根', 
            visual: '🍚🧈🍄🥕',
            tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'braised-tofu'
        },
        { 
            name: '意面配煎三文鱼', 
            description: '全麦意面100g + 三文鱼1块(约100g) + 芦笋6-8根', 
            visual: '🍝🐟🌱',
            tags: ['omega3', 'city', 'complex'],
            recipeId: 'salmon-pasta'
        },
        { 
            name: '红薯配瘦猪肉炒卷心菜', 
            description: '红薯1块(约100g) + 瘦猪肉100g + 卷心菜1/4颗(约150g)', 
            visual: '🍠🥩🥬',
            tags: ['low-fat', 'easy-cook', 'canteen', 'town', 'rural', 'simple'],
            recipeId: 'pork-cabbage'
        },
        { 
            name: '大米粥配咸菜炒鸡蛋', 
            description: '大米粥1碗(约100g) + 鸡蛋2个 + 咸菜50g', 
            visual: '🥣🥚🥬',
            tags: ['easy-cook', 'canteen', 'town', 'rural', 'simple'],
            recipeId: 'porridge-egg'
        }
    ],
    dinner: [
        { 
            name: '小米粥配清蒸鱼', 
            description: '小米粥1碗(约100g) + 鱼肉1块(约100g) + 菠菜1把(约100g)', 
            visual: '🥣🐟🥬',
            tags: ['high-protein', 'low-fat', 'easy-cook', 'city', 'simple'],
            recipeId: 'fish-porridge'
        },
        { 
            name: '白米饭配瘦羊肉炒芹菜', 
            description: '白米饭1碗(约100g) + 瘦羊肉100g + 芹菜1把(约150g)', 
            visual: '🍚🐑🥬',
            tags: ['high-protein', 'low-fat', 'canteen', 'takeout', 'town', 'simple'],
            recipeId: 'lamb-celery'
        },
        { 
            name: '全麦馒头配鸡蛋炒黄瓜', 
            description: '全麦馒头1个(约100g) + 鸡蛋2个 + 黄瓜1根(约100g)', 
            visual: '🥠🍳🥒',
            tags: ['easy-cook', 'canteen', 'town', 'rural', 'simple'],
            recipeId: 'egg-cucumber'
        },
        { 
            name: '糙米配黑豆炒胡萝卜', 
            description: '糙米饭1碗(约100g) + 黑豆50g + 胡萝卜1根(约100g) + 菠菜1小把', 
            visual: '🍚🫘🥕🥬',
            tags: ['vegan', 'vegetarian', 'high-protein', 'easy-cook', 'canteen', 'town', 'rural', 'moderate'],
            recipeId: 'blackbean-carrot'
        },
        { 
            name: '藜麦沙拉配豆腐', 
            description: '藜麦1小碗(约100g) + 豆腐1块(约100g) + 生菜1把 + 番茄1个', 
            visual: '🥗🧈🍅',
            tags: ['vegan', 'vegetarian', 'high-protein', 'city', 'complex'],
            recipeId: 'quinoa-tofu'
        },
        { 
            name: '荞麦面配虾仁炒蘑菇', 
            description: '荞麦面100g + 虾仁100g + 蘑菇5-6朵 + 青椒半个', 
            visual: '🍜🦐🍄',
            tags: ['high-protein', 'low-fat', 'city', 'complex'],
            recipeId: 'buckwheat-shrimp'
        },
        { 
            name: '米饭配茄子炒青椒', 
            description: '白米饭1碗(约100g) + 茄子1根(约100g) + 青椒1个(约100g)', 
            visual: '🍚🍆🫑',
            tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'eggplant-pepper'
        },
        { 
            name: '面条配番茄鸡蛋卤', 
            description: '面条100g + 鸡蛋2个 + 番茄1个 + 青菜1小把', 
            visual: '🍜🍅🍳',
            tags: ['easy-cook', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'noodle-tomato'
        }
    ],
    snack: [
        { 
            name: '苹果配核桃', 
            description: '苹果1个(中等大小) + 核桃2颗', 
            visual: '🍎🥜',
            tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'apple-walnut'
        },
        { 
            name: '酸奶配蓝莓', 
            description: '酸奶1小盒(100g) + 蓝莓1小碗(约100g)', 
            visual: '🥛🫐',
            tags: ['dairy', 'high-protein', 'city', 'complex'],
            recipeId: 'yogurt-blueberry'
        },
        { 
            name: '香蕉配杏仁', 
            description: '香蕉1根(中等大小) + 杏仁15颗', 
            visual: '🍌🥜',
            tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'banana-almond'
        },
        { 
            name: '黄瓜配花生', 
            description: '黄瓜1根(约100g) + 花生20g', 
            visual: '🥒🥜',
            tags: ['low-calorie', 'vegan', 'vegetarian', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'cucumber-peanut'
        },
        { 
            name: '橙子配葵花籽', 
            description: '橙子1个(中等大小) + 葵花籽20g', 
            visual: '🍊🌻',
            tags: ['vegan', 'vegetarian', 'canteen', 'takeout', 'town', 'rural', 'simple'],
            recipeId: 'orange-sunflower'
        },
        { 
            name: '牛油果配全麦面包', 
            description: '牛油果1/4个 + 全麦面包1片(约50g)', 
            visual: '🥑🍞',
            tags: ['healthy-fat', 'vegan', 'vegetarian', 'city', 'complex'],
            recipeId: 'avocado-bread'
        },
        { 
            name: '水煮蛋配番茄', 
            description: '水煮蛋1个 + 番茄1个(中等大小)', 
            visual: '🍳🍅',
            tags: ['high-protein', 'easy-cook', 'canteen', 'town', 'rural'],
            recipeId: 'egg-tomato'
        }
    ]
};

const detailedRecipes = {
    'oatmeal-egg': {
        ingredients: ['燕麦片80g', '牛奶250ml', '鸡蛋1个', '盐少许'],
        steps: [
            '将燕麦片放入碗中，加入牛奶浸泡5分钟',
            '放入微波炉加热1-2分钟，或用锅小火煮3分钟',
            '另起一锅，少油煎鸡蛋，撒少许盐',
            '将煎好的鸡蛋放在燕麦粥上即可'
        ],
        tips: '喜欢甜口可以加一小勺蜂蜜'
    },
    'bread-milk': {
        ingredients: ['全麦面包2片', '牛奶250ml', '苹果1个'],
        steps: [
            '面包放入面包机或平底锅烤至微焦',
            '牛奶加热至温热',
            '苹果洗净切块',
            '搭配食用即可'
        ],
        tips: '面包可以抹少许花生酱增加风味'
    },
    'millet-porridge': {
        ingredients: ['小米50g', '水500ml', '鸡蛋1个', '黄瓜1根', '盐少许', '香油几滴'],
        steps: [
            '小米淘洗干净，加水煮20分钟至软烂',
            '鸡蛋煮熟剥壳切块',
            '黄瓜切丝，加少许盐和香油拌匀',
            '搭配食用'
        ],
        tips: '小米粥煮好后可以焖5分钟更软糯'
    },
    'tomato-egg': {
        ingredients: ['番茄1个', '鸡蛋2个', '葱花少许', '盐适量', '生抽1勺', '食用油1汤匙'],
        steps: [
            '番茄洗净切块，鸡蛋打散备用',
            '锅中倒油，油热后倒入鸡蛋液炒至凝固，盛出备用',
            '锅中再倒少许油，放入番茄块翻炒出汁',
            '加入炒好的鸡蛋，加生抽和盐调味',
            '撒葱花出锅'
        ],
        tips: '番茄可以去皮口感更好'
    },
    'chicken-broccoli': {
        ingredients: ['鸡胸肉100g', '西兰花150g', '蒜末少许', '盐适量', '生抽1勺', '蚝油半勺', '食用油1汤匙'],
        steps: [
            '鸡胸肉切片，用少许盐和生抽腌制10分钟',
            '西兰花切成小朵，焯水备用',
            '锅中倒油，放入蒜末爆香',
            '加入鸡胸肉片翻炒至变色',
            '加入西兰花翻炒，加蚝油和盐调味',
            '翻炒均匀出锅'
        ],
        tips: '鸡胸肉切薄一点更容易熟'
    },
    'tofu-vegetables': {
        ingredients: ['豆腐1块', '青菜150g', '姜末少许', '盐适量', '生抽1勺', '食用油1汤匙'],
        steps: [
            '豆腐切小块，青菜洗净切段',
            '锅中倒油，放入姜末爆香',
            '加入豆腐块轻轻翻炒',
            '加入青菜翻炒至变软',
            '加生抽和盐调味即可'
        ],
        tips: '豆腐用盐水泡一下不容易碎'
    },
    'beef-pepper': {
        ingredients: ['瘦牛肉100g', '青椒1个', '蒜末少许', '盐适量', '生抽1勺', '料酒1勺', '淀粉少许', '食用油1汤匙'],
        steps: [
            '牛肉切片，用料酒、生抽和淀粉腌制10分钟',
            '青椒切块',
            '锅中倒油，油热后放入牛肉片快速翻炒',
            '牛肉变色后加入青椒翻炒',
            '加盐调味，翻炒均匀出锅'
        ],
        tips: '牛肉要大火快炒才嫩'
    },
    'braised-tofu': {
        ingredients: ['豆腐1块', '蘑菇5-6朵', '胡萝卜半根', '葱花少许', '盐适量', '生抽1勺', '老抽半勺', '糖少许', '食用油1汤匙'],
        steps: [
            '豆腐切小块，蘑菇切片，胡萝卜切块',
            '锅中倒油，放入豆腐煎至金黄',
            '加入蘑菇和胡萝卜翻炒',
            '加生抽、老抽、糖和水，小火焖5分钟',
            '加盐调味，撒葱花出锅'
        ],
        tips: '可以加少许豆瓣酱增加风味'
    },
    'pork-cabbage': {
        ingredients: ['瘦猪肉100g', '卷心菜150g', '蒜末少许', '盐适量', '生抽1勺', '食用油1汤匙'],
        steps: [
            '猪肉切丝，卷心菜撕成小片',
            '锅中倒油，放入蒜末爆香',
            '加入猪肉丝翻炒至变色',
            '加入卷心菜翻炒至变软',
            '加生抽和盐调味即可'
        ],
        tips: '卷心菜炒软一点更好吃'
    },
    'egg-cucumber': {
        ingredients: ['鸡蛋2个', '黄瓜1根', '葱花少许', '盐适量', '食用油1汤匙'],
        steps: [
            '鸡蛋打散，黄瓜切丝',
            '锅中倒油，倒入鸡蛋液炒至凝固',
            '加入黄瓜丝翻炒',
            '加盐调味，撒葱花出锅'
        ],
        tips: '黄瓜可以先腌一下更入味'
    },
    'eggplant-pepper': {
        ingredients: ['茄子1根', '青椒1个', '蒜末少许', '盐适量', '生抽1勺', '蚝油半勺', '食用油2汤匙'],
        steps: [
            '茄子和青椒切块',
            '锅中倒油，放入茄子煎至变软',
            '加入青椒和蒜末翻炒',
            '加生抽、蚝油和盐调味',
            '翻炒均匀出锅'
        ],
        tips: '茄子可以先用盐腌一下去水'
    },
    'noodle-tomato': {
        ingredients: ['面条100g', '鸡蛋2个', '番茄1个', '青菜1小把', '盐适量', '生抽1勺', '食用油1汤匙'],
        steps: [
            '番茄切块，鸡蛋打散',
            '锅中倒油，倒入鸡蛋液炒至凝固，盛出',
            '锅中再倒少许油，放入番茄炒出汁',
            '加水烧开，下面条煮熟',
            '加入青菜和炒好的鸡蛋',
            '加生抽和盐调味'
        ],
        tips: '面条过凉水更劲道'
    },
    'quinoa-shrimp': {
        ingredients: ['藜麦100g', '虾仁100g', '生菜100g', '番茄1个', '橄榄油1勺', '盐适量', '黑胡椒少许'],
        steps: [
            '藜麦淘洗干净，加水煮15分钟',
            '虾仁焯水备用',
            '生菜撕片，番茄切块',
            '将所有食材放入碗中，加橄榄油、盐和黑胡椒拌匀'
        ],
        tips: '虾仁不要煮太久以免变老'
    },
    'salmon-pasta': {
        ingredients: ['全麦意面100g', '三文鱼100g', '芦笋6-8根', '蒜末少许', '橄榄油1勺', '盐适量', '黑胡椒少许'],
        steps: [
            '意面按包装说明煮熟，过凉水',
            '三文鱼切块，用盐和黑胡椒腌制',
            '芦笋焯水切段',
            '锅中倒橄榄油，放入蒜末爆香',
            '加入三文鱼煎至金黄',
            '加入芦笋和意面翻炒',
            '加盐和黑胡椒调味'
        ],
        tips: '三文鱼煎至两面金黄即可'
    },
    'buckwheat-shrimp': {
        ingredients: ['荞麦面100g', '虾仁100g', '蘑菇5-6朵', '青椒半个', '葱花少许', '生抽1勺', '香油几滴', '盐适量'],
        steps: [
            '荞麦面煮熟过凉水',
            '虾仁焯水，蘑菇和青椒切片',
            '锅中倒油，放入葱花爆香',
            '加入蘑菇和青椒翻炒',
            '加入虾仁翻炒',
            '加入荞麦面，加生抽和盐调味',
            '滴几滴香油出锅'
        ],
        tips: '荞麦面比较筋道，煮的时间可以长一点'
    },
    'quinoa-tofu': {
        ingredients: ['藜麦100g', '豆腐1块', '生菜100g', '番茄1个', '醋1勺', '生抽1勺', '香油几滴'],
        steps: [
            '藜麦淘洗干净，加水煮15分钟',
            '豆腐切块焯水',
            '生菜撕片，番茄切块',
            '将所有食材放入碗中，加醋、生抽和香油拌匀'
        ],
        tips: '可以加少许花生碎增加口感'
    },
    'fish-porridge': {
        ingredients: ['小米50g', '鱼肉100g', '菠菜100g', '姜片2片', '盐适量', '香油几滴'],
        steps: [
            '小米淘洗干净，加水煮20分钟',
            '鱼肉切片，用盐腌制5分钟',
            '菠菜焯水切段',
            '将鱼片和姜片加入小米粥中',
            '小火煮5分钟至鱼片熟透',
            '加入菠菜，加盐调味',
            '滴几滴香油出锅'
        ],
        tips: '鱼片很容易熟，不要煮太久'
    },
    'lamb-celery': {
        ingredients: ['瘦羊肉100g', '芹菜150g', '蒜末少许', '盐适量', '生抽1勺', '料酒1勺', '食用油1汤匙'],
        steps: [
            '羊肉切丝，用料酒腌制5分钟',
            '芹菜切段',
            '锅中倒油，放入蒜末爆香',
            '加入羊肉丝翻炒至变色',
            '加入芹菜翻炒至变软',
            '加生抽和盐调味'
        ],
        tips: '芹菜可以先焯水去味'
    },
    'blackbean-carrot': {
        ingredients: ['糙米100g', '黑豆50g', '胡萝卜1根', '菠菜50g', '盐适量', '香油几滴'],
        steps: [
            '糙米和黑豆提前浸泡2小时',
            '加水煮25-30分钟至软烂',
            '胡萝卜切块，菠菜切段',
            '将胡萝卜加入粥中煮10分钟',
            '加入菠菜，加盐调味',
            '滴几滴香油'
        ],
        tips: '黑豆一定要提前浸泡'
    },
    'apple-walnut': {
        ingredients: ['苹果1个', '核桃2颗'],
        steps: [
            '苹果洗净切块',
            '核桃砸开取仁',
            '搭配食用即可'
        ],
        tips: '核桃可以稍微烤一下更香'
    },
    'yogurt-blueberry': {
        ingredients: ['酸奶100g', '蓝莓100g'],
        steps: [
            '蓝莓洗净',
            '将蓝莓放入酸奶中拌匀即可'
        ],
        tips: '可以加少许蜂蜜调味'
    },
    'banana-almond': {
        ingredients: ['香蕉1根', '杏仁15颗'],
        steps: [
            '香蕉剥皮切段',
            '搭配杏仁食用'
        ],
        tips: '杏仁可以碾碎撒在香蕉上'
    },
    'cucumber-peanut': {
        ingredients: ['黄瓜1根', '花生20g', '盐少许', '醋半勺'],
        steps: [
            '黄瓜洗净切片',
            '花生炒熟放凉',
            '将黄瓜和花生放入碗中，加盐和醋拌匀'
        ],
        tips: '花生可以用烤箱烤更香'
    },
    'orange-sunflower': {
        ingredients: ['橙子1个', '葵花籽20g'],
        steps: [
            '橙子剥皮',
            '搭配葵花籽食用'
        ],
        tips: '葵花籽不要吃太多'
    },
    'avocado-bread': {
        ingredients: ['牛油果1/4个', '全麦面包1片', '盐少许', '黑胡椒少许'],
        steps: [
            '面包烤至微焦',
            '牛油果切块压成泥',
            '将牛油果泥抹在面包上',
            '撒少许盐和黑胡椒'
        ],
        tips: '选择熟透的牛油果更软糯'
    },
    'egg-tomato': {
        ingredients: ['鸡蛋1个', '番茄1个', '盐少许'],
        steps: [
            '鸡蛋煮熟剥壳',
            '番茄洗净切块',
            '搭配食用，鸡蛋可以撒少许盐'
        ],
        tips: '鸡蛋可以煮成溏心蛋'
    },
    'corn-egg': {
        ingredients: ['玉米1根', '鸡蛋1个', '酸奶100g'],
        steps: [
            '玉米蒸熟或煮熟',
            '鸡蛋煮熟',
            '搭配酸奶食用'
        ],
        tips: '玉米可以用微波炉加热'
    },
    'oatmeal-banana': {
        ingredients: ['燕麦片80g', '水或牛奶300ml', '香蕉1根', '鸡蛋1个'],
        steps: [
            '燕麦片加水煮3分钟至浓稠',
            '香蕉压成泥加入燕麦粥中',
            '鸡蛋煮熟切块放在上面'
        ],
        tips: '可以加少许肉桂粉增加风味'
    },
    'soy-oatmeal': {
        ingredients: ['豆浆250ml', '燕麦片80g', '橙子1个'],
        steps: [
            '豆浆加热，加入燕麦片煮2-3分钟',
            '橙子剥皮切块',
            '搭配食用'
        ],
        tips: '可以加少许冰糖调味'
    },
    'porridge-egg': {
        ingredients: ['大米50g', '水500ml', '鸡蛋2个', '咸菜50g', '食用油少许'],
        steps: [
            '大米淘洗干净，加水煮20分钟至软烂',
            '鸡蛋打散，用少许油炒散',
            '咸菜切碎',
            '将鸡蛋和咸菜放在粥上'
        ],
        tips: '咸菜不要放太多以免太咸'
    }
};

const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9
};

const exerciseRecommendations = {
    sedentary: {
        cardio: ['快走30分钟', '瑜伽20分钟', '拉伸15分钟'],
        strength: ['靠墙深蹲', '平板支撑', '坐姿抬腿'],
        tips: '建议每周至少进行150分钟中等强度有氧运动'
    },
    light: {
        cardio: ['快走45分钟', '慢跑20分钟', '游泳30分钟'],
        strength: ['哑铃训练', '俯卧撑', '深蹲'],
        tips: '保持规律运动，逐步增加强度'
    },
    moderate: {
        cardio: ['慢跑30分钟', '骑行40分钟', '篮球30分钟'],
        strength: ['力量训练45分钟', 'HIIT训练20分钟'],
        tips: '注意运动后拉伸，预防受伤'
    },
    active: {
        cardio: ['跑步45分钟', '游泳50分钟', '羽毛球40分钟'],
        strength: ['负重训练', 'CrossFit', '攀岩'],
        tips: '确保充足蛋白质摄入支持肌肉恢复'
    },
    very_active: {
        cardio: ['长跑60分钟', '高强度间歇训练'],
        strength: ['专业力量训练', '功能性训练'],
        tips: '注意休息和恢复，避免过度训练'
    }
};

const nutritionKnowledge = [
    {
        id: 1,
        title: '蛋白质的重要性',
        content: '蛋白质是构成肌肉、器官和免疫系统细胞的基础。成年人每天建议摄入1.2-1.6克/公斤体重的蛋白质。优质蛋白质来源包括鸡胸肉、鱼类、鸡蛋和豆类。',
        tips: '每餐保证有手掌心大小的蛋白质食物'
    },
    {
        id: 2,
        title: '碳水化合物的选择',
        content: '碳水化合物是身体的主要能量来源。建议选择全谷物、薯类和豆类等复合碳水化合物，它们消化较慢，能提供更持久的能量。',
        tips: '用糙米、燕麦替代部分精制米面'
    },
    {
        id: 3,
        title: '健康脂肪',
        content: '脂肪并非敌人，健康的脂肪对身体至关重要。Omega-3脂肪酸有助于心脏健康，单不饱和脂肪有助于降低胆固醇。',
        tips: '每天摄入一小把坚果或半个牛油果'
    },
    {
        id: 4,
        title: '膳食纤维',
        content: '膳食纤维有助于维持肠道健康，预防便秘，并帮助控制血糖。建议每天摄入25-30克膳食纤维。',
        tips: '每餐保证有足量的蔬菜和水果'
    },
    {
        id: 5,
        title: '水分摄入',
        content: '水是生命之源，身体的60%由水组成。每天建议饮用1.5-2升水，运动后适当补充电解质。',
        tips: '每天早上起床后喝一杯温水'
    },
    {
        id: 6,
        title: '中国居民膳食指南要点',
        content: '1.食物多样，谷类为主；2.多吃蔬菜、水果和薯类；3.每天吃奶类、大豆或其制品；4.常吃适量的鱼、禽、蛋和瘦肉；5.减少烹调油用量，吃清淡少盐膳食。',
        tips: '参考膳食宝塔，合理搭配饮食'
    }
];

function calculateBMR(age, gender, height, weight) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

function calculateTDEE(bmr, activityLevel) {
    return bmr * activityFactors[activityLevel];
}

function calculateCalories(tdee, goal) {
    switch (goal) {
        case 'lose':
            return tdee - 500;
        case 'gain':
            return tdee + 500;
        default:
            return tdee;
    }
}

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

let cookingPreference = '';
let locationPreference = '';
let complexityPreference = '';

function getFilteredFoods(categories, preferences) {
    let allFoods = [];
    categories.forEach(cat => {
        let foods = foodDatabase[cat] || [];
        
        const requiredTags = [...preferences];
        if (cookingPreference === 'canteen') requiredTags.push('canteen');
        if (cookingPreference === 'takeout') requiredTags.push('takeout');
        if (cookingPreference === 'home-cook') requiredTags.push('easy-cook');
        if (locationPreference === 'city') {}
        if (locationPreference === 'town') {
            requiredTags.push('town');
            foods = foods.filter(f => !f.tags || !f.tags.includes('seafood') || f.tags.includes('town'));
        }
        if (locationPreference === 'campus') requiredTags.push('canteen');

        if (requiredTags.length > 0) {
            foods = foods.filter(food => {
                const hasAnyRequired = requiredTags.some(pref => food.tags && food.tags.includes(pref));
                const hasNoForbidden = true;
                return hasAnyRequired && hasNoForbidden;
            });
        }
        
        if (foods.length === 0) {
            foods = foodDatabase[cat] || [];
        }
        
        allFoods = allFoods.concat(foods);
    });
    return allFoods;
}

function generateSingleDayPlan(calories, preferences) {
    const mealRatios = {
        breakfast: 0.25,
        lunch: 0.35,
        dinner: 0.30,
        snack: 0.10
    };

    const mealCalories = {
        breakfast: Math.round(calories * mealRatios.breakfast),
        lunch: Math.round(calories * mealRatios.lunch),
        dinner: Math.round(calories * mealRatios.dinner),
        snack: Math.round(calories * mealRatios.snack)
    };

    return {
        breakfast: generateMeal(mealCalories.breakfast, 'breakfast', preferences),
        lunch: generateMeal(mealCalories.lunch, 'lunch', preferences),
        dinner: generateMeal(mealCalories.dinner, 'dinner', preferences),
        snack: generateMeal(mealCalories.snack, 'snack', preferences)
    };
}

function generateMealPlan(calories, preferences, days = 1) {
    const mealPlans = [];
    
    for (let i = 0; i < days; i++) {
        const dayPlan = generateSingleDayPlan(calories, preferences);
        mealPlans.push(dayPlan);
    }
    
    return days === 1 ? mealPlans[0] : mealPlans;
}

function getFilteredRecipes(mealType, preferences) {
    let recipes = recipeDatabase[mealType] || [];
    
    const requiredTags = [...preferences];
    
    if (cookingPreference === 'canteen') requiredTags.push('canteen');
    if (cookingPreference === 'takeout') requiredTags.push('takeout');
    if (cookingPreference === 'home-cook') requiredTags.push('easy-cook');
    
    if (locationPreference === 'city') {
    } else if (locationPreference === 'town') {
        requiredTags.push('town');
        recipes = recipes.filter(r => !r.tags || !r.tags.includes('city'));
    } else if (locationPreference === 'rural') {
        requiredTags.push('rural');
        recipes = recipes.filter(r => !r.tags || !r.tags.includes('city'));
    } else if (locationPreference === 'campus') {
        requiredTags.push('canteen');
        recipes = recipes.filter(r => !r.tags || !r.tags.includes('city'));
    }

    if (complexityPreference === 'simple') {
        recipes = recipes.filter(r => r.tags && r.tags.includes('simple'));
    } else if (complexityPreference === 'moderate') {
        recipes = recipes.filter(r => r.tags && (r.tags.includes('simple') || r.tags.includes('moderate')));
    } else if (complexityPreference === 'complex') {
        recipes = recipes.filter(r => r.tags && (r.tags.includes('moderate') || r.tags.includes('complex')));
    }

    if (requiredTags.length > 0) {
        recipes = recipes.filter(recipe => {
            const hasAnyRequired = requiredTags.some(pref => recipe.tags && recipe.tags.includes(pref));
            return hasAnyRequired;
        });
    }
    
    if (recipes.length === 0) {
        recipes = recipeDatabase[mealType] || [];
    }
    
    return recipes;
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function calculateRecipeNutrition(recipe, mealType) {
    const calorieMultiplier = {
        breakfast: 0.25,
        lunch: 0.35,
        dinner: 0.30,
        snack: 0.10
    };

    const baseCalories = {
        breakfast: 450,
        lunch: 650,
        dinner: 550,
        snack: 180
    };

    const baseProtein = {
        breakfast: 25,
        lunch: 40,
        dinner: 35,
        snack: 10
    };

    const baseCarbs = {
        breakfast: 55,
        lunch: 75,
        dinner: 60,
        snack: 25
    };

    const baseFat = {
        breakfast: 12,
        lunch: 18,
        dinner: 15,
        snack: 5
    };

    return {
        totalCalories: baseCalories[mealType],
        totalProtein: baseProtein[mealType],
        totalCarbs: baseCarbs[mealType],
        totalFat: baseFat[mealType]
    };
}

function generateMeal(targetCalories, mealType, preferences) {
    const recipes = getFilteredRecipes(mealType, preferences);
    const recipe = getRandomItem(recipes.length > 0 ? recipes : recipeDatabase[mealType]);
    
    const nutrition = calculateRecipeNutrition(recipe, mealType);

    return {
        recipe: recipe,
        totalCalories: nutrition.totalCalories,
        totalProtein: nutrition.totalProtein,
        totalCarbs: nutrition.totalCarbs,
        totalFat: nutrition.totalFat
    };
}

function displayMealPlan(mealPlan) {
    const mealIds = ['breakfast', 'lunch', 'dinner', 'snack'];
    const dayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    
    const isMultiDay = Array.isArray(mealPlan);
    
    if (isMultiDay) {
        let weekContent = '';
        mealPlan.forEach((dayPlan, dayIndex) => {
            weekContent += `
                <div class="week-day" style="background: white; border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <h3 style="font-size: 18px; color: #2d3748; margin-bottom: 15px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                        📅 ${dayNames[dayIndex]}
                    </h3>
                    <div class="day-meals" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
            `;
            
            mealIds.forEach(mealId => {
                const meal = dayPlan[mealId];
                const hasRecipe = detailedRecipes[meal.recipe.recipeId];
                const recipeLink = hasRecipe ? `
                    <button class="recipe-link" onclick="showRecipeDetail('${meal.recipe.recipeId}', '${meal.recipe.name}')" style="margin-top: 10px; padding: 6px 12px; background: #667eea; color: white; border: none; border-radius: 6px; font-size: 13px; cursor: pointer; transition: background 0.3s;">
                        📖 做法
                    </button>
                ` : '';
                
                weekContent += `
                    <div class="mini-meal-card" style="background: #f7fafc; border-radius: 12px; padding: 15px;">
                        <div style="font-size: 12px; color: #718096; margin-bottom: 5px;">${mealId === 'breakfast' ? '🍳 早餐' : mealId === 'lunch' ? '🍛 午餐' : mealId === 'dinner' ? '🍲 晚餐' : '🍎 加餐'}</div>
                        <div style="font-size: 20px; margin-bottom: 5px;">${meal.recipe.visual}</div>
                        <div style="font-weight: bold; font-size: 14px; color: #2d3748; margin-bottom: 5px;">${meal.recipe.name}</div>
                        <div style="font-size: 12px; color: #4a5568; line-height: 1.5;">${meal.recipe.description}</div>
                        <div style="font-size: 11px; color: #718096; margin-top: 8px;">${meal.totalCalories} kcal | 蛋白质 ${meal.totalProtein}g</div>
                        ${recipeLink}
                    </div>
                `;
            });
            
            weekContent += `
                    </div>
                </div>
            `;
        });
        
        document.getElementById('week-plan-container').innerHTML = weekContent;
        document.getElementById('week-plan-section').classList.remove('hidden');
        document.getElementById('single-day-section').classList.add('hidden');
    } else {
        mealIds.forEach(mealId => {
            const meal = mealPlan[mealId];
            const card = document.getElementById(mealId);
            const content = card.querySelector('.meal-content');
            const calSpan = card.querySelector('.meal-nutrition .cal');
            const proteinSpan = card.querySelector('.meal-nutrition .protein');
            const carbsSpan = card.querySelector('.meal-nutrition .carbs');
            const fatSpan = card.querySelector('.meal-nutrition .fat');

            const hasRecipe = detailedRecipes[meal.recipe.recipeId];
            const recipeLink = hasRecipe ? `
                <button class="recipe-link" onclick="showRecipeDetail('${meal.recipe.recipeId}', '${meal.recipe.name}')" style="margin-top: 10px; padding: 6px 12px; background: #667eea; color: white; border: none; border-radius: 6px; font-size: 13px; cursor: pointer; transition: background 0.3s;">
                    📖 查看详细做法
                </button>
            ` : '';

            content.innerHTML = `
                <div class="recipe-visual" style="font-size: 28px; margin-bottom: 8px;">
                    ${meal.recipe.visual}
                </div>
                <div class="recipe-name" style="font-weight: bold; font-size: 16px; color: #2d3748; margin-bottom: 8px;">
                    ${meal.recipe.name}
                </div>
                <div class="recipe-description" style="font-size: 14px; color: #4a5568; line-height: 1.8;">
                    ${meal.recipe.description}
                </div>
                ${recipeLink}
            `;

            calSpan.textContent = meal.totalCalories;
            proteinSpan.textContent = meal.totalProtein;
            carbsSpan.textContent = meal.totalCarbs;
            fatSpan.textContent = meal.totalFat;
        });
        
        document.getElementById('week-plan-section').classList.add('hidden');
        document.getElementById('single-day-section').classList.remove('hidden');
    }
}

function showRecipeDetail(recipeId, recipeName) {
    const recipe = detailedRecipes[recipeId];
    if (!recipe) return;

    let modalContent = `
        <div class="modal-overlay" onclick="closeRecipeModal()" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
            <div class="modal-content" onclick="event.stopPropagation()" style="background: white; border-radius: 16px; padding: 30px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="font-size: 20px; color: #2d3748; margin: 0;">📖 ${recipeName}</h3>
                    <button onclick="closeRecipeModal()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #718096;">✕</button>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="font-size: 16px; color: #4a5568; margin-bottom: 10px;">🥘 食材清单</h4>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        ${recipe.ingredients.map(ing => `<li style="padding: 6px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #4a5568;">• ${ing}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="font-size: 16px; color: #4a5568; margin-bottom: 10px;">👩🍳 烹饪步骤</h4>
                    <ol style="padding-left: 20px; margin: 0;">
                        ${recipe.steps.map((step, index) => `<li style="padding: 8px 0; font-size: 14px; color: #4a5568; line-height: 1.6;">${step}</li>`).join('')}
                    </ol>
                </div>
                
                ${recipe.tips ? `<div style="background: #fef3c7; padding: 12px; border-radius: 8px;">
                    <p style="font-size: 14px; color: #92400e; margin: 0;">💡 小贴士：${recipe.tips}</p>
                </div>` : ''}
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalContent);
}

function closeRecipeModal() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) overlay.remove();
}

function displayStats(bmi, bmr, calories) {
    document.getElementById('bmi').textContent = bmi.toFixed(1);
    document.getElementById('bmr').textContent = Math.round(bmr);
    document.getElementById('calories').textContent = Math.round(calories);
    
    const bmiCategory = getBMICategory(bmi);
    document.getElementById('bmi-category').textContent = bmiCategory.text;
    document.getElementById('bmi-category').className = `bmi-category ${bmiCategory.class}`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return { text: '偏瘦', class: 'underweight' };
    if (bmi < 24) return { text: '正常', class: 'normal' };
    if (bmi < 28) return { text: '超重', class: 'overweight' };
    return { text: '肥胖', class: 'obese' };
}

function displayTotalNutrition(mealPlan) {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    const isMultiDay = Array.isArray(mealPlan);
    
    if (isMultiDay) {
        mealPlan.forEach(dayPlan => {
            Object.values(dayPlan).forEach(meal => {
                totalCalories += meal.totalCalories;
                totalProtein += meal.totalProtein;
                totalCarbs += meal.totalCarbs;
                totalFat += meal.totalFat;
            });
        });
        const days = mealPlan.length;
        totalCalories = Math.round(totalCalories / days);
        totalProtein = Math.round(totalProtein / days);
        totalCarbs = Math.round(totalCarbs / days);
        totalFat = Math.round(totalFat / days);
    } else {
        Object.values(mealPlan).forEach(meal => {
            totalCalories += meal.totalCalories;
            totalProtein += meal.totalProtein;
            totalCarbs += meal.totalCarbs;
            totalFat += meal.totalFat;
        });
    }

    const totalCal = totalCalories || 1;
    const proteinPercent = Math.min(Math.round((totalProtein * 4 / totalCal) * 100), 100);
    const carbsPercent = Math.min(Math.round((totalCarbs * 4 / totalCal) * 100), 100);
    const fatPercent = Math.min(Math.round((totalFat * 9 / totalCal) * 100), 100);

    document.getElementById('total-protein').textContent = `${totalProtein}g (${proteinPercent}%)`;
    document.getElementById('total-carbs').textContent = `${totalCarbs}g (${carbsPercent}%)`;
    document.getElementById('total-fat').textContent = `${totalFat}g (${fatPercent}%)`;

    animateBar('.protein-bar', proteinPercent);
    animateBar('.carbs-bar', carbsPercent);
    animateBar('.fat-bar', fatPercent);
}

function animateBar(selector, percent) {
    const bar = document.querySelector(selector);
    bar.style.width = '0%';
    setTimeout(() => {
        bar.style.width = `${percent}%`;
    }, 100);
}

function displayExerciseRecommendations(activityLevel) {
    const recs = exerciseRecommendations[activityLevel] || exerciseRecommendations.sedentary;
    
    document.getElementById('cardio-list').innerHTML = recs.cardio.map(item => `
        <li>${item}</li>
    `).join('');
    
    document.getElementById('strength-list').innerHTML = recs.strength.map(item => `
        <li>${item}</li>
    `).join('');
    
    document.getElementById('exercise-tips').textContent = recs.tips;
}

function displayNutritionKnowledge() {
    const container = document.getElementById('knowledge-container');
    container.innerHTML = nutritionKnowledge.map(item => `
        <div class="knowledge-card">
            <h4>${item.title}</h4>
            <p>${item.content}</p>
            <div class="knowledge-tip">💡 ${item.tips}</div>
        </div>
    `).join('');
}

function saveToHistory(data) {
    const history = JSON.parse(localStorage.getItem('nutritionHistory') || '[]');
    history.unshift({
        ...data,
        date: new Date().toISOString()
    });
    if (history.length > 10) history.pop();
    localStorage.setItem('nutritionHistory', JSON.stringify(history));
}

function loadHistory() {
    return JSON.parse(localStorage.getItem('nutritionHistory') || '[]');
}

function displayHistory() {
    const history = loadHistory();
    const container = document.getElementById('history-container');
    
    if (history.length === 0) {
        container.innerHTML = '<p class="no-history">暂无历史记录</p>';
        return;
    }

    container.innerHTML = history.map((item, index) => `
        <div class="history-item" data-index="${index}">
            <div class="history-date">${formatDate(item.date)}</div>
            <div class="history-stats">
                <span>BMI: ${item.bmi.toFixed(1)}</span>
                <span>热量: ${Math.round(item.calories)} kcal</span>
            </div>
            <button class="history-load" onclick="loadFromHistory(${index})">加载</button>
        </div>
    `).join('');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function loadFromHistory(index) {
    const history = loadHistory();
    const item = history[index];
    
    document.getElementById('age').value = item.age;
    document.getElementById('gender').value = item.gender;
    document.getElementById('height').value = item.height;
    document.getElementById('weight').value = item.weight;
    document.getElementById('activity').value = item.activity;
    document.getElementById('goal').value = item.goal;
    document.getElementById('cooking').value = item.cooking || '';
    document.getElementById('location').value = item.location || '';
    cookingPreference = item.cooking || '';
    locationPreference = item.location || '';
    
    document.getElementById('input-section').classList.remove('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    
    displayStats(item.bmi, item.bmr, item.calories);
    displayMealPlan(item.mealPlan);
    displayTotalNutrition(item.mealPlan);
    displayExerciseRecommendations(item.activity);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareMealPlan() {
    const calories = document.getElementById('calories').textContent;
    const bmi = document.getElementById('bmi').textContent;
    
    const text = `今日饮食计划 🍎\n每日热量需求: ${calories} kcal\nBMI: ${bmi}\n智能营养规划师为您定制`;
    
    if (navigator.share) {
        navigator.share({
            title: '我的营养计划',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text);
        alert('已复制到剪贴板！');
    }
}

function init() {
    displayNutritionKnowledge();
    displayHistory();
    
    const preferences = [];
    document.querySelectorAll('.preference-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const index = preferences.indexOf(this.value);
            if (this.checked && index === -1) {
                preferences.push(this.value);
            } else if (!this.checked && index !== -1) {
                preferences.splice(index, 1);
            }
        });
    });

    document.getElementById('nutrition-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const height = parseInt(document.getElementById('height').value);
        const weight = parseInt(document.getElementById('weight').value);
        const activity = document.getElementById('activity').value;
        const goal = document.getElementById('goal').value;
        cookingPreference = document.getElementById('cooking').value || '';
        locationPreference = document.getElementById('location').value || '';
        complexityPreference = document.getElementById('complexity').value || '';
        const days = parseInt(document.getElementById('days').value) || 1;

        if (!age || !gender || !height || !weight || !activity || !goal) {
            showToast('请填写所有必填项');
            return;
        }

        const bmr = calculateBMR(age, gender, height, weight);
        const tdee = calculateTDEE(bmr, activity);
        const calories = calculateCalories(tdee, goal);
        const bmi = calculateBMI(weight, height);

        const mealPlan = generateMealPlan(calories, preferences, days);
        
        console.log('Generated meal plan:', mealPlan);
        console.log('Is array:', Array.isArray(mealPlan));
        console.log('Days:', days);

        displayStats(bmi, bmr, calories);
        displayMealPlan(mealPlan);
        displayTotalNutrition(mealPlan);
        displayExerciseRecommendations(activity);

        saveToHistory({
            age, gender, height, weight, activity, goal,
            bmr, tdee, calories, bmi,
            mealPlan,
            cooking: cookingPreference,
            location: locationPreference
        });
        displayHistory();

        document.getElementById('input-section').classList.add('hidden');
        document.getElementById('result-section').classList.remove('hidden');
        document.getElementById('history-section').classList.remove('hidden');
        document.getElementById('knowledge-section').classList.remove('hidden');
        document.getElementById('exercise-section').classList.remove('hidden');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('regenerate-btn').addEventListener('click', function() {
        const calories = parseInt(document.getElementById('calories').textContent);
        const mealPlan = generateMealPlan(calories, preferences);
        displayMealPlan(mealPlan);
        displayTotalNutrition(mealPlan);
        showToast('已生成新的饮食计划');
    });

    document.getElementById('back-btn').addEventListener('click', function() {
        document.getElementById('input-section').classList.remove('hidden');
        document.getElementById('result-section').classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('share-btn').addEventListener('click', shareMealPlan);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', init);