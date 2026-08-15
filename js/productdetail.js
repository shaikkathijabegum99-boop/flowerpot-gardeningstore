document.addEventListener("DOMContentLoaded", function () {
    const products = {
        "premium-green-plant": {
            category: "Plants",
            title: "Premium Green Plant",
            image: "./images/p1.jpg",
            thumbnails: [
                "./images/p1.jpg",
                "./images/indoor plants.jpg",
                "./images/indoor.jpg"
            ],
            badge: "Bestseller",
            price: "₹599",
            oldPrice: "₹699",
            discount: "14% OFF",
            rating: "4.8",
            reviews: "(126 reviews)",
            description:
                "Easy-care greenery for living rooms, bedrooms, offices and everyday indoor spaces.",
            detailHeading:
                "A Better Choice For Your Everyday Green Space",
            detailOne:
                "This premium green plant is selected for gardeners who want attractive greenery without complicated care routines.",
            detailTwo:
                "Its versatile character makes it suitable for indoor spaces where a natural touch can create a fresher and more comfortable atmosphere.",
            highlights: [
                ["sun", "Light", "Bright indirect light"],
                ["droplets", "Water", "Moderate watering"],
                ["ruler", "Size", "Medium indoor plant"],
                ["leaf", "Care", "Beginner friendly"]
            ],
            specifications: {
                "Category": "Indoor Plants",
                "Care Level": "Easy",
                "Light": "Indirect Light",
                "Water": "Moderate",
                "Placement": "Indoor",
                "Suitable For": "Beginners"
            },
            care: [
                ["sun", "Light",
                    "Place in bright, indirect natural light."
                ],
                ["droplets", "Water",
                    "Water moderately and allow the soil to dry slightly."
                ],
                ["sprout", "Feed",
                    "Use suitable plant nutrition during active growth."
                ],
                ["scissors", "Maintain",
                    "Remove damaged leaves and keep the growing area clean."
                ]
            ]
        },
        "monstera-indoor-plant": {
            category: "Plants",
            title: "Monstera Indoor Plant",
            image: "./images/monstra.jpg",
            thumbnails: [
                "./images/monstra.jpg",
                "./images/indoor plants.jpg",
                "./images/indoor.jpg"
            ],
            badge: "New",
            price: "₹899",
            oldPrice: "₹999",
            discount: "10% OFF",
            rating: "4.8",
            reviews: "(98 reviews)",
            description:
                "A statement indoor plant with beautiful foliage for stylish living rooms and bright green corners.",
            detailHeading:
                "Create A Strong Green Focal Point",
            detailOne:
                "The Monstera Indoor Plant is ideal for gardeners who want a larger decorative plant with a distinctive tropical appearance.",
            detailTwo:
                "Position it in a bright indoor space and maintain a consistent watering routine for healthy growth.",
            highlights: [
                ["sun", "Light", "Bright indirect light"],
                ["droplets", "Water", "Moderate watering"],
                ["ruler", "Size", "Large indoor plant"],
                ["leaf", "Care", "Easy to moderate"]
            ],
            specifications: {
                "Category": "Indoor Plants",
                "Care Level": "Easy",
                "Light": "Bright Indirect Light",
                "Water": "Moderate",
                "Placement": "Indoor",
                "Suitable For": "Home & Office"
            },
            care: [
                ["sun", "Light",
                    "Keep near a bright window without harsh direct sun."
                ],
                ["droplets", "Water",
                    "Water when the upper soil begins to dry."
                ],
                ["sprout", "Feed",
                    "Feed during active growing periods."
                ],
                ["scissors", "Maintain",
                    "Trim yellow or damaged leaves when required."
                ]
            ]
        },
        "modern-ceramic-pot": {
            category: "Flower Pots",
            title: "Modern Ceramic Pot",
            image: "./images/ceramic.jpg",
            thumbnails: [
                "./images/ceramic.jpg",
                "./images/ceramic pots.jpg",
                "./images/modern.jpg"
            ],
            badge: "Popular",
            price: "₹449",
            oldPrice: "₹549",
            discount: "18% OFF",
            rating: "4.7",
            reviews: "(84 reviews)",
            description:
                "A clean ceramic planter designed for modern indoor spaces and decorative plant displays.",
            detailHeading:
                "A Stylish Home For Your Favorite Plants",
            detailOne:
                "The Modern Ceramic Pot brings a clean and contemporary appearance to indoor plant arrangements.",
            detailTwo:
                "Its versatile shape works well with small to medium plants in living rooms, desks and entryways.",
            highlights: [
                ["palette", "Material", "Ceramic"],
                ["ruler", "Size", "Medium"],
                ["home", "Placement", "Indoor"],
                ["leaf", "Style", "Modern"]
            ],
            specifications: {
                "Category": "Flower Pots",
                "Material": "Ceramic",
                "Finish": "Smooth",
                "Placement": "Indoor",
                "Size": "Medium",
                "Suitable For": "Small & Medium Plants"
            },
            care: [
                ["droplets", "Drainage",
                    "Use a suitable drainage setup for your plant."
                ],
                ["sparkles", "Cleaning",
                    "Wipe the surface with a soft cloth."
                ],
                ["leaf", "Planting",
                    "Choose a plant suited to the pot size."
                ],
                ["package", "Handling",
                    "Handle carefully to protect the ceramic surface."
                ]
            ]
        },
        "terracotta-garden-pot": {
            category: "Flower Pots",
            title: "Terracotta Garden Pot",
            image: "./images/clay.jpg",
            thumbnails: [
                "./images/clay.jpg",
                "./images/m1.jpg",
                "./images/m2.jpg"
            ],
            badge: "Classic",
            price: "₹299",
            oldPrice: "₹349",
            discount: "14% OFF",
            rating: "4.6",
            reviews: "(72 reviews)",
            description:
                "Natural terracotta pot for herbs, flowers and everyday balcony or outdoor gardening.",
            detailHeading:
                "Natural Texture For Everyday Gardening",
            detailOne:
                "Terracotta brings a warm, natural character to flower and herb displays while complementing traditional and contemporary spaces.",
            detailTwo:
                "It is a practical choice for gardeners looking for a simple, earthy planter for everyday growing.",
            highlights: [
                ["package", "Material", "Terracotta"],
                ["ruler", "Size", "Medium"],
                ["sun", "Placement", "Outdoor / Balcony"],
                ["flower-2", "Style", "Natural"]
            ],
            specifications: {
                "Category": "Flower Pots",
                "Material": "Terracotta",
                "Finish": "Natural",
                "Placement": "Outdoor / Balcony",
                "Size": "Medium",
                "Suitable For": "Herbs & Flowers"
            },
            care: [
                ["droplets", "Water",
                    "Maintain watering according to the plant requirement."
                ],
                ["sun", "Placement",
                    "Use a suitable spot with enough natural light."
                ],
                ["sparkles", "Cleaning",
                    "Remove mineral marks when necessary."
                ],
                ["package", "Handling",
                    "Move carefully to avoid cracks."
                ]
            ]
        },
        "organic-potting-mix": {
            category: "Soil & Compost",
            title: "Organic Potting Mix",
            image: "./images/fertilizer.jpg",
            thumbnails: [
                "./images/fertilizer.jpg",
                "./images/organic.jpg",
                "./images/compost.jpg"
            ],
            badge: "Popular",
            price: "₹299",
            oldPrice: "₹349",
            discount: "14% OFF",
            rating: "4.8",
            reviews: "(109 reviews)",
            description:
                "Balanced growing medium for supporting healthy roots and everyday container gardening.",
            detailHeading:
                "A Better Base For Healthy Growth",
            detailOne:
                "Organic Potting Mix is designed for gardeners who want a practical growing medium for containers and indoor plants.",
            detailTwo:
                "Use it when repotting or creating a fresh growing environment for suitable plants.",
            highlights: [
                ["sprout", "Use", "Potting & Repotting"],
                ["droplets", "Moisture", "Balanced"],
                ["leaf", "Type", "Organic Mix"],
                ["ruler", "Use Case", "Container Gardening"]
            ],
            specifications: {
                "Category": "Soil & Compost",
                "Type": "Potting Mix",
                "Use": "Containers",
                "Application": "Repotting",
                "Suitable For": "Indoor & Outdoor Plants",
                "Care Level": "Easy"
            },
            care: [
                ["package", "Storage",
                    "Keep the bag sealed in a dry place."
                ],
                ["droplets", "Water",
                    "Water according to plant requirements."
                ],
                ["sprout", "Application",
                    "Use an appropriate amount when planting."
                ],
                ["leaf", "Maintenance",
                    "Refresh soil when plants require repotting."
                ]
            ]
        },
        "seasonal-flower-seeds": {
            category: "Seeds",
            title: "Seasonal Flower Seeds",
            image: "./images/seeds.jpg",
            thumbnails: [
                "./images/seeds.jpg"
            ],
            badge: "Seasonal",
            price: "₹149",
            oldPrice: "₹179",
            discount: "17% OFF",
            rating: "4.6",
            reviews: "(61 reviews)",
            description:
                "Easy-to-grow seasonal seeds for colorful flower beds, containers and home gardens.",
            detailHeading:
                "Start A Colorful Seasonal Garden",
            detailOne:
                "These seasonal flower seeds are suited to gardeners who want to introduce more color into pots, balconies or outdoor garden spaces.",
            detailTwo:
                "Planting should follow the recommended seasonal conditions for best results.",
            highlights: [
                ["flower-2", "Type", "Flower Seeds"],
                ["sun", "Light", "Sunlight"],
                ["sprout", "Use", "Garden & Pots"],
                ["calendar", "Timing", "Seasonal"]
            ],
            specifications: {
                "Category": "Seeds",
                "Type": "Flower Seeds",
                "Use": "Pots & Garden Beds",
                "Light": "Sunlight",
                "Planting": "Seasonal",
                "Suitable For": "Home Gardeners"
            },
            care: [
                ["sun", "Light",
                    "Choose a location with appropriate sunlight."
                ],
                ["droplets", "Water",
                    "Keep the growing medium appropriately moist."
                ],
                ["sprout", "Planting",
                    "Follow the recommended sowing depth."
                ],
                ["clock", "Timing",
                    "Plant according to the suitable season."
                ]
            ]
        },
        "plant-growth-fertilizer": {
            category: "Fertilizers",
            title: "Plant Growth Fertilizer",
            image: "./images/fertilizer1.jpg",
            thumbnails: [
                "./images/fertilizer1.jpg",
                "./images/fertilizer.jpg"
            ],
            badge: "Garden Essential",
            price: "₹349",
            oldPrice: "₹399",
            discount: "13% OFF",
            rating: "4.7",
            reviews: "(87 reviews)",
            description:
                "Everyday plant nutrition to support steady growth and healthy greenery.",
            detailHeading:
                "Support Stronger Plant Growth",
            detailOne:
                "Plant Growth Fertilizer is an everyday gardening essential designed to support plants during suitable growth periods.",
            detailTwo:
                "Use according to the product instructions and the nutritional requirements of your plants.",
            highlights: [
                ["sprout", "Purpose", "Plant Nutrition"],
                ["leaf", "Use", "Garden & Pots"],
                ["calendar", "Timing", "Growth Period"],
                ["droplets", "Application", "Measured Use"]
            ],
            specifications: {
                "Category": "Fertilizers",
                "Type": "Plant Nutrition",
                "Use": "Plants",
                "Application": "As Directed",
                "Suitable For": "Home Gardens",
                "Care Level": "Easy"
            },
            care: [
                ["clipboard-check", "Dosage",
                    "Follow the recommended application amount."
                ],
                ["calendar", "Timing",
                    "Use during suitable plant growth periods."
                ],
                ["droplets", "Application",
                    "Apply according to product instructions."
                ],
                ["package", "Storage",
                    "Store in a dry, secure location."
                ]
            ]
        },
        "everyday-garden-tool-set": {
            category: "Garden Tools",
            title: "Everyday Garden Tool Set",
            image: "./images/garden tools.jpg",
            thumbnails: [
                "./images/garden tools.jpg",
                "./images/accerios.jpg"
            ],
            badge: "Value Set",
            price: "₹799",
            oldPrice: "₹899",
            discount: "11% OFF",
            rating: "4.8",
            reviews: "(95 reviews)",
            description:
                "Practical garden tools for planting, pruning, pot care and everyday maintenance.",
            detailHeading:
                "Everything You Need For Everyday Garden Care",
            detailOne:
                "This everyday tool set is designed to help home gardeners handle common planting, pruning and maintenance tasks.",
            detailTwo:
                "A practical addition to balconies, patios, container gardens and small outdoor spaces.",
            highlights: [
                ["wrench", "Use", "Everyday Gardening"],
                ["scissors", "Task", "Pruning"],
                ["sprout", "Task", "Planting"],
                ["package", "Storage", "Easy to Store"]
            ],
            specifications: {
                "Category": "Garden Tools",
                "Type": "Tool Set",
                "Use": "Planting & Maintenance",
                "Suitable For": "Home Gardeners",
                "Storage": "Compact",
                "Care Level": "Easy"
            },
            care: [
                ["sparkles", "Cleaning",
                    "Clean tools after use."
                ],
                ["droplets", "Drying",
                    "Dry tools before storage."
                ],
                ["package", "Storage",
                    "Store in a dry place."
                ],
                ["shield-check", "Maintenance",
                    "Check tools regularly before use."
                ]
            ]
        },
        "outdoor-garden-plant": {
            category: "Plants",
            title: "Outdoor Garden Plant",
            image: "./images/outdoor.jpg",
            thumbnails: [
                "./images/outdoor.jpg",
                "./images/p1.jpg"
            ],
            badge: "Outdoor Favorite",
            price: "₹699",
            oldPrice: "₹799",
            discount: "13% OFF",
            rating: "4.7",
            reviews: "(73 reviews)",
            description:
                "Hardy greenery selected for balconies, patios and suitable outdoor garden spaces.",
            detailHeading:
                "Bring More Greenery Outdoors",
            detailOne:
                "Outdoor Garden Plant is suited to gardeners who want to introduce dependable greenery into outdoor spaces.",
            detailTwo:
                "Choose a suitable location according to the light and environmental requirements of the plant.",
            highlights: [
                ["sun", "Light", "Outdoor Light"],
                ["droplets", "Water", "Moderate"],
                ["ruler", "Size", "Medium"],
                ["leaf", "Placement", "Outdoor"]
            ],
            specifications: {
                "Category": "Outdoor Plants",
                "Care Level": "Moderate",
                "Light": "Outdoor Light",
                "Water": "Moderate",
                "Placement": "Outdoor",
                "Suitable For": "Balconies & Gardens"
            },
            care: [
                ["sun", "Light",
                    "Choose a suitable outdoor location."
                ],
                ["droplets", "Water",
                    "Water according to weather and plant needs."
                ],
                ["wind", "Protection",
                    "Protect from unsuitable extreme conditions."
                ],
                ["leaf", "Maintenance",
                    "Remove damaged growth regularly."
                ]
            ]
        },
        "decorative-planter": {
            category: "Flower Pots",
            title: "Decorative Planter",
            image: "./images/designer pots.jpg",
            thumbnails: [
                "./images/designer pots.jpg",
                "./images/ceramic.jpg"
            ],
            badge: "Home Favorite",
            price: "₹699",
            oldPrice: "₹799",
            discount: "13% OFF",
            rating: "4.7",
            reviews: "(68 reviews)",
            description:
                "A versatile decorative planter for indoor plants and stylish green corners.",
            detailHeading:
                "A Simple Way To Style Your Green Corner",
            detailOne:
                "The Decorative Planter is designed to complement plants while adding a polished finishing touch to living spaces.",
            detailTwo:
                "Use it for suitable indoor plants in entryways, shelves, living rooms or creative corners.",
            highlights: [
                ["palette", "Style", "Decorative"],
                ["ruler", "Size", "Medium"],
                ["home", "Placement", "Indoor"],
                ["leaf", "Use", "Plant Display"]
            ],
            specifications: {
                "Category": "Flower Pots",
                "Material": "Decorative Planter",
                "Placement": "Indoor",
                "Size": "Medium",
                "Style": "Modern",
                "Suitable For": "Indoor Plants"
            },
            care: [
                ["droplets", "Drainage",
                    "Use a suitable drainage setup."
                ],
                ["sparkles", "Cleaning",
                    "Wipe gently to keep the surface clean."
                ],
                ["leaf", "Planting",
                    "Choose a suitable plant size."
                ],
                ["package", "Handling",
                    "Handle carefully while moving."
                ]
            ]
        },
        "garden-compost": {
            category: "Soil & Compost",
            title: "Garden Compost",
            image: "./images/compost.jpg",
            thumbnails: [
                "./images/compost.jpg",
                "./images/fertilizer.jpg"
            ],
            badge: "Garden Essential",
            price: "₹249",
            oldPrice: "₹299",
            discount: "17% OFF",
            rating: "4.6",
            reviews: "(55 reviews)",
            description:
                "Organic matter for supporting fertile soil and healthier garden growth.",
            detailHeading:
                "Build A Better Growing Environment",
            detailOne:
                "Garden Compost can be incorporated into suitable growing spaces to support soil quality and everyday garden care.",
            detailTwo:
                "Use according to the needs of your soil and plants rather than applying the same quantity everywhere.",
            highlights: [
                ["sprout", "Purpose", "Soil Improvement"],
                ["leaf", "Type", "Compost"],
                ["package", "Use", "Garden & Pots"],
                ["shovel", "Application", "Soil Preparation"]
            ],
            specifications: {
                "Category": "Soil & Compost",
                "Type": "Garden Compost",
                "Use": "Soil Improvement",
                "Application": "Garden & Pots",
                "Suitable For": "Home Gardeners",
                "Care Level": "Easy"
            },
            care: [
                ["package", "Storage",
                    "Keep sealed and protected from excessive moisture."
                ],
                ["shovel", "Application",
                    "Mix according to soil requirements."
                ],
                ["leaf", "Use",
                    "Apply to suitable garden spaces."
                ],
                ["calendar", "Timing",
                    "Use during planting or soil preparation."
                ]
            ]
        },
        "hand-pruning-tool": {
            category: "Garden Tools",
            title: "Hand Pruning Tool",
            image: "./images/hanging.jpg",
            thumbnails: [
                "./images/hanging.jpg",
                "./images/s12.jpg"
            ],
            badge: "Everyday Essential",
            price: "₹399",
            oldPrice: "₹449",
            discount: "11% OFF",
            rating: "4.7",
            reviews: "(81 reviews)",
            description:
                "Compact pruning support for everyday plant and garden maintenance.",
            detailHeading:
                "Practical Support For Regular Plant Care",
            detailOne:
                "The Hand Pruning Tool is designed for common pruning and maintenance tasks around home gardens and potted plants.",
            detailTwo:
                "Its compact format makes it convenient to store and reach for during everyday garden care.",
            highlights: [
                ["scissors", "Use", "Pruning"],
                ["hand", "Grip", "Easy Handling"],
                ["leaf", "Task", "Plant Maintenance"],
                ["package", "Storage", "Compact"]
            ],
            specifications: {
                "Category": "Garden Tools",
                "Type": "Pruning Tool",
                "Use": "Plant Maintenance",
                "Suitable For": "Home Gardens",
                "Storage": "Compact",
                "Care Level": "Easy"
            },
            care: [
                ["sparkles", "Cleaning",
                    "Clean after each use."
                ],
                ["droplets", "Drying",
                    "Dry before storage."
                ],
                ["package", "Storage",
                    "Keep in a dry place."
                ],
                ["shield-check", "Maintenance",
                    "Check the tool before use."
                ]
            ]
        }
    };
    const mainImage =
        document.getElementById("mainProductImage");
    const thumbnails =
        document.getElementById("productThumbnails");
    const breadcrumb =
        document.getElementById("breadcrumbProduct");
    const category =
        document.getElementById("productCategory");
    const title =
        document.getElementById("productTitle");
    const badge =
        document.getElementById("productBadge");
    const rating =
        document.getElementById("productRating");
    const reviews =
        document.getElementById("productReviews");
    const price =
        document.getElementById("productPrice");
    const oldPrice =
        document.getElementById("productOldPrice");
    const discount =
        document.getElementById("productDiscount");
    const description =
        document.getElementById("productDescription");
    const highlights =
        document.getElementById("productHighlights");
    const detailHeading =
        document.getElementById("detailHeading");
    const detailOne =
        document.getElementById("detailDescriptionOne");
    const detailTwo =
        document.getElementById("detailDescriptionTwo");
    const specifications =
        document.getElementById("productSpecifications");
    const careGuide =
        document.getElementById("careGuide");
    const relatedProducts =
        document.getElementById("relatedProducts");
    const quantityValue =
        document.getElementById("quantityValue");
    const quantityMinus =
        document.getElementById("quantityMinus");
    const quantityPlus =
        document.getElementById("quantityPlus");
    const addToCartButton =
        document.querySelector(".product-add-btn");
    const buyNowButton =
        document.querySelector(".product-buy-actions .btn-secondary");
    const wishlistButton =
        document.querySelector(".product-wishlist");
    let quantity = 1;
    function getCurrentProduct(){
        const hash =
            window.location.hash
                .replace("#","")
                .trim()
                .toLowerCase();
        if(products[hash]){
            return products[hash];
        }
        return products["premium-green-plant"];
    }
    function createSlug(name){
        return String(name)
            .toLowerCase()
            .trim()
            .replace(/&/g,"and")
            .replace(/[^a-z0-9]+/g,"-")
            .replace(/^-+|-+$/g,"");
    }
    function renderThumbnails(product){
        if(!thumbnails){
            return;
        }
        thumbnails.innerHTML =
            product.thumbnails
                .map(
                    function(image,index){
                        return `
                            <button
                                type="button"
                                class="product-thumbnail ${index === 0 ? "active" : ""}"
                                data-image="${image}">
                                <img
                                    src="${image}"
                                    alt="${product.title}"
                                >
                            </button>
                        `;
                    }
                )
                .join("");
        thumbnails
            .querySelectorAll(
                ".product-thumbnail"
            )
            .forEach(
                function(button){
                    button.addEventListener(
                        "click",
                        function(){
                            mainImage.src =
                                this.dataset.image;
                            thumbnails
                                .querySelectorAll(
                                    ".product-thumbnail"
                                )
                                .forEach(
                                    function(item){
                                        item.classList.remove(
                                            "active"
                                        );
                                    }
                                );
                            this.classList.add(
                                "active"
                            );
                        }
                    );
                }
            );
    }
    function renderHighlights(product){
        if(!highlights){
            return;
        }
        highlights.innerHTML =
            product.highlights
                .map(
                    function(item){
                        return `
                            <div class="detail-highlight">
                                <i data-lucide="${item[0]}"></i>
                                <div>
                                    <strong>
                                        ${item[1]}
                                    </strong>
                                    <span>
                                        ${item[2]}
                                    </span>
                                </div>
                            </div>
                        `;
                    }
                )
                .join("");
    }
    function renderSpecifications(product){
        if(!specifications){
            return;
        }
        specifications.innerHTML =
            Object.entries(
                product.specifications
            )
            .map(
                function(item){
                    return `
                        <div class="specification-row">
                            <span>
                                ${item[0]}
                            </span>
                            <strong>
                                ${item[1]}
                            </strong>
                        </div>
                    `;
                }
            )
            .join("");
    }
    function renderCare(product){
        if(!careGuide){
            return;
        }
        careGuide.innerHTML =
            product.care
                .map(
                    function(item){
                        return `
                            <article class="care-guide-card">
                                <div class="care-guide-icon">
                                    <i data-lucide="${item[0]}"></i>
                                </div>
                                <h3>
                                    ${item[1]}
                                </h3>
                                <p>
                                    ${item[2]}
                                </p>
                            </article>
                        `;
                    }
                )
                .join("");
    }
function renderRelated(current){
    if(!relatedProducts){
        return;
    }
    const related =
        Object.entries(products)
            .filter(function(entry){
                return entry[0] !==
                    createSlug(current.title);
            })
            .slice(0, 3);
    relatedProducts.innerHTML =
        related
            .map(function(entry){
                const key = entry[0];
                const product = entry[1];
                return `
                    <article class="related-product-card">
                        <div class="related-product-image">
                            <img
                                src="${product.image}"
                                alt="${product.title}"
                                loading="lazy"
                            >
                        </div>
                        <div class="related-product-content">
                            <span>
                                ${product.category}
                            </span>
                            <h3>
                                ${product.title}
                            </h3>
                            <strong>
                                ${product.price}
                            </strong>
                            <a href="product-details.html#${key}">
                                View Product
                                <i data-lucide="arrow-right"></i>
                            </a>
                        </div>
                    </article>
                `;
            })
            .join("");
}
    function renderProduct(){
        const product =
            getCurrentProduct();
        quantity = 1;
        if(quantityValue){
            quantityValue.textContent =
                quantity;
        }
        document.title =
            `${product.title} | BloomNest`;
        if(breadcrumb){
            breadcrumb.textContent =
                product.title;
        }
        if(category){
            category.textContent =
                product.category;
        }
        if(title){
            title.textContent =
                product.title;
        }
        if(mainImage){
            mainImage.src =
                product.image;
            mainImage.alt =
                product.title;
        }
        if(badge){
            badge.textContent =
                product.badge;
        }
        if(rating){
            rating.textContent =
                product.rating;
        }
        if(reviews){
            reviews.textContent =
                product.reviews;
        }
        if(price){
            price.textContent =
                product.price;
        }
        if(oldPrice){
            oldPrice.textContent =
                product.oldPrice;
        }
        if(discount){
            discount.textContent =
                product.discount;
        }
        if(description){
            description.textContent =
                product.description;
        }
        if(detailHeading){
            detailHeading.textContent =
                product.detailHeading;
        }
        if(detailOne){
            detailOne.textContent =
                product.detailOne;
        }
        if(detailTwo){
            detailTwo.textContent =
                product.detailTwo;
        }
        renderThumbnails(product);
        renderHighlights(product);
        renderSpecifications(product);
        renderCare(product);
        renderRelated(product);
        if(wishlistButton){
            wishlistButton.classList.remove(
                "active"
            );
        }
        refreshIcons();
    }
    if(quantityMinus){
        quantityMinus.addEventListener(
            "click",
            function(){
                if(quantity > 1){
                    quantity--;
                    quantityValue.textContent =
                        quantity;
                }
            }
        );
    }
    if(quantityPlus){
        quantityPlus.addEventListener(
            "click",
            function(){
                quantity++;
                quantityValue.textContent =
                    quantity;
            }
        );
    }
    if(addToCartButton){
        addToCartButton.addEventListener(
            "click",
            function(){
                const product =
                    getCurrentProduct();
                const cartItem = {
                    id:
                        createSlug(
                            product.title
                        ),
                    name:
                        product.title,
                    category:
                        product.category,
                    price:
                        product.price,
                    image:
                        product.image,
                    quantity:
                        quantity
                };
                let cart =
                    JSON.parse(
                        localStorage.getItem(
                            "bloomnestCart"
                        )
                    ) || [];
                const existing =
                    cart.find(
                        function(item){
                            return (
                                item.id ===
                                cartItem.id
                            );
                        }
                    );
                if(existing){
                    existing.quantity +=
                        quantity;
                }else{
                    cart.push(
                        cartItem
                    );
                }
                localStorage.setItem(
                    "bloomnestCart",
                    JSON.stringify(cart)
                );
                showProductMessage(
                    "Product added to cart."
                );
            }
        );
    }
    if(buyNowButton){
        buyNowButton.addEventListener(
            "click",
            function(){
                const product =
                    getCurrentProduct();
                const buyItem = {
                    id:
                        createSlug(
                            product.title
                        ),
                    name:
                        product.title,
                    price:
                        product.price,
                    image:
                        product.image,
                    quantity:
                        quantity
                };
                localStorage.setItem(
                    "bloomnestBuyNow",
                    JSON.stringify(
                        buyItem
                    )
                );
                /*
                 * Change this to your checkout page
                 * when checkout.html is created.
                 */
                window.location.href =
                    "contact.html";
            }
        );
    }
    if(wishlistButton){
        wishlistButton.addEventListener(
            "click",
            function(){
                const product =
                    getCurrentProduct();
                const id =
                    createSlug(
                        product.title
                    );
                let wishlist =
                    JSON.parse(
                        localStorage.getItem(
                            "bloomnestWishlist"
                        )
                    ) || [];
                const exists =
                    wishlist.includes(id);
                if(exists){
                    wishlist =
                        wishlist.filter(
                            function(item){
                                return item !== id;
                            }
                        );
                    wishlistButton.classList.remove(
                        "active"
                    );
                    showProductMessage(
                        "Removed from wishlist."
                    );
                }else{
                    wishlist.push(id);
                    wishlistButton.classList.add(
                        "active"
                    );
                    showProductMessage(
                        "Added to wishlist."
                    );
                }
                localStorage.setItem(
                    "bloomnestWishlist",
                    JSON.stringify(
                        wishlist
                    )
                );
            }
        );
    }
    function restoreWishlist(){
        if(!wishlistButton){
            return;
        }
        const product =
            getCurrentProduct();
        const id =
            createSlug(
                product.title
            );
        const wishlist =
            JSON.parse(
                localStorage.getItem(
                    "bloomnestWishlist"
                )
            ) || [];
        wishlistButton.classList.toggle(
            "active",
            wishlist.includes(id)
        );
    }
    function showProductMessage(message){
        let messageBox =
            document.getElementById(
                "productMessage"
            );
        if(!messageBox){
            messageBox =
                document.createElement(
                    "div"
                );
            messageBox.id =
                "productMessage";
            messageBox.style.position =
                "fixed";
            messageBox.style.right =
                "20px";
            messageBox.style.bottom =
                "20px";
            messageBox.style.zIndex =
                "9999";
            messageBox.style.padding =
                "13px 18px";
            messageBox.style.borderRadius =
                "12px";
            messageBox.style.background =
                "var(--primary)";
            messageBox.style.color =
                "#fff";
            messageBox.style.fontFamily =
                "Manrope, sans-serif";
            messageBox.style.fontSize =
                "14px";
            messageBox.style.fontWeight =
                "700";
            messageBox.style.boxShadow =
                "var(--shadow-lg)";
            document.body.appendChild(
                messageBox
            );
        }
        messageBox.textContent =
            message;
        messageBox.style.opacity =
            "1";
        clearTimeout(
            messageBox.hideTimer
        );
        messageBox.hideTimer =
            setTimeout(
                function(){
                    messageBox.style.opacity =
                        "0";
                },
                2200
            );
    }
    window.addEventListener(
        "hashchange",
        function(){
            renderProduct();
            restoreWishlist();
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        }
    );
    function refreshIcons(){
        if(window.lucide){
            lucide.createIcons();
        }
    }
    renderProduct();
    restoreWishlist();
});
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    function refreshIcons() {
        if (window.lucide) {
            lucide.createIcons();
        }
    }
    const products = {
        "premium-green-plant": {
            title: "Premium Green Plant",
            category: "Indoor Plants",
            price: "₹599",
            oldPrice: "₹699",
            discount: "14% OFF",
            rating: "4.8",
            reviews: "(126 reviews)",
            badge: "Bestseller",
            image: "./images/p1.jpg",
            thumbnails: [
                "./images/p1.jpg",
                "./images/indoor.jpg",
                "./images/s1.jpg"
            ],
            description:
                "Easy-care greenery selected for homes, offices and beautiful indoor spaces.",
            highlights: [
                "Low maintenance",
                "Ideal for indoor spaces",
                "Beginner friendly",
                "Suitable for homes and offices"
            ],
            detailHeading:
                "A Better Choice For Your Green Space",
            detailOne:
                "Premium Green Plant is a practical choice for creating a fresh and relaxing atmosphere indoors. Its easy-care nature makes it suitable for beginners and busy plant lovers.",
            detailTwo:
                "Place it in a bright indoor corner and follow a simple watering routine to maintain healthy, attractive greenery throughout your space.",
            specifications: [
                ["Plant Type", "Indoor Green Plant"],
                ["Maintenance", "Low"],
                ["Placement", "Indoor"],
                ["Care Level", "Beginner Friendly"],
                ["Suitable For", "Home & Office"]
            ],
            care: [
                {
                    icon: "sun",
                    title: "Light",
                    text: "Keep the plant in bright, indirect light."
                },
                {
                    icon: "droplets",
                    title: "Water",
                    text: "Water when the top layer of soil feels dry."
                },
                {
                    icon: "sprout",
                    title: "Soil",
                    text: "Use a well-draining potting mix."
                },
                {
                    icon: "scissors",
                    title: "Maintenance",
                    text: "Remove damaged leaves and keep the plant clean."
                }
            ],
            related: [
                "modern-ceramic-pot",
                "organic-potting-mix",
                "monstera-indoor-plant"
            ]
        },
        "monstera-indoor-plant": {
            title: "Monstera Indoor Plant",
            category: "Indoor Plants",
            price: "₹899",
            oldPrice: "₹999",
            discount: "10% OFF",
            rating: "4.9",
            reviews: "(98 reviews)",
            badge: "New",
            image: "./images/monstra.jpg",
            thumbnails: [
                "./images/monstra.jpg",
                "./images/outdoor.jpg",
                "./images/s2.jpg"
            ],
            description:
                "A statement indoor plant with beautiful leaves for stylish green corners.",
            highlights: [
                "Statement indoor plant",
                "Beautiful decorative foliage",
                "Ideal for living spaces",
                "Moderate maintenance"
            ],
            detailHeading:
                "Bring Tropical Character Indoors",
            detailOne:
                "Monstera adds a bold natural presence to modern interiors with its large decorative foliage and distinctive tropical appearance.",
            detailTwo:
                "Give it bright indirect light, moderate watering and enough room for healthy leaf growth.",
            specifications: [
                ["Plant Type", "Tropical Indoor Plant"],
                ["Maintenance", "Moderate"],
                ["Placement", "Indoor"],
                ["Care Level", "Intermediate"],
                ["Suitable For", "Home & Office"]
            ],
            care: [
                {
                    icon: "sun",
                    title: "Light",
                    text: "Provide bright, indirect sunlight."
                },
                {
                    icon: "droplets",
                    title: "Water",
                    text: "Water when the upper soil layer becomes dry."
                },
                {
                    icon: "sprout",
                    title: "Humidity",
                    text: "Moderate humidity supports healthy foliage."
                },
                {
                    icon: "scissors",
                    title: "Pruning",
                    text: "Trim damaged leaves as needed."
                }
            ],
            related: [
                "premium-green-plant",
                "decorative-planter",
                "modern-ceramic-pot"
            ]
        },
        "modern-ceramic-pot": {
            title: "Modern Ceramic Pot",
            category: "Flower Pots",
            price: "₹449",
            oldPrice: "₹499",
            discount: "10% OFF",
            rating: "4.7",
            reviews: "(84 reviews)",
            badge: "Popular",
            image: "./images/ceramic.jpg",
            thumbnails: [
                "./images/ceramic.jpg",
                "./images/designer pots.jpg",
                "./images/clay.jpg"
            ],
            description:
                "Minimal ceramic styling for modern indoor plant displays.",
            highlights: [
                "Modern ceramic design",
                "Ideal for indoor displays",
                "Stable planter structure",
                "Easy to clean"
            ],
            detailHeading:
                "Style Your Plants With Better Planters",
            detailOne:
                "The Modern Ceramic Pot combines a clean silhouette with a practical design that works well with indoor plants and contemporary interiors.",
            detailTwo:
                "Choose a suitable plant size and ensure proper drainage before placing your plant inside.",
            specifications: [
                ["Material", "Ceramic"],
                ["Placement", "Indoor"],
                ["Style", "Modern"],
                ["Maintenance", "Low"],
                ["Use", "Decorative Planting"]
            ],
            care: [
                {
                    icon: "droplets",
                    title: "Drainage",
                    text: "Use a suitable drainage setup for your plant."
                },
                {
                    icon: "sprout",
                    title: "Plant Size",
                    text: "Match the pot with the plant's root size."
                },
                {
                    icon: "sparkles",
                    title: "Cleaning",
                    text: "Wipe the outer surface regularly."
                },
                {
                    icon: "move",
                    title: "Placement",
                    text: "Keep the planter on a stable surface."
                }
            ],
            related: [
                "premium-green-plant",
                "decorative-planter",
                "terracotta-garden-pot"
            ]
        },
        "terracotta-garden-pot": {
            title: "Terracotta Garden Pot",
            category: "Flower Pots",
            price: "₹299",
            oldPrice: "₹349",
            discount: "14% OFF",
            rating: "4.8",
            reviews: "(72 reviews)",
            badge: "Popular",
            image: "./images/clay.jpg",
            thumbnails: [
                "./images/clay.jpg",
                "./images/ceramic.jpg"
            ],
            description:
                "Natural terracotta pot for herbs, flowers and outdoor gardening.",
            highlights: [
                "Natural terracotta",
                "Great for outdoor spaces",
                "Suitable for herbs and flowers",
                "Classic garden appearance"
            ],
            detailHeading:
                "A Natural Home For Healthy Plants",
            detailOne:
                "Terracotta planters offer a natural, timeless appearance and work beautifully with outdoor garden arrangements.",
            detailTwo:
                "Use well-draining soil and avoid keeping the pot constantly saturated.",
            specifications: [
                ["Material", "Terracotta"],
                ["Placement", "Indoor & Outdoor"],
                ["Style", "Classic"],
                ["Maintenance", "Low"],
                ["Use", "Flowers & Herbs"]
            ],
            care: [
                {
                    icon: "droplets",
                    title: "Water",
                    text: "Avoid leaving excess water around the roots."
                },
                {
                    icon: "sun",
                    title: "Placement",
                    text: "Suitable for bright outdoor garden spaces."
                },
                {
                    icon: "sprout",
                    title: "Soil",
                    text: "Use a light and well-draining soil mix."
                },
                {
                    icon: "sparkles",
                    title: "Cleaning",
                    text: "Clean the outer surface when needed."
                }
            ],
            related: [
                "modern-ceramic-pot",
                "organic-potting-mix",
                "decorative-planter"
            ]
        },
        "organic-potting-mix": {
            title: "Organic Potting Mix",
            category: "Soil & Compost",
            price: "₹299",
            oldPrice: "₹349",
            discount: "14% OFF",
            rating: "4.8",
            reviews: "(91 reviews)",
            badge: "Popular",
            image: "./images/fertilizer.jpg",
            thumbnails: [
                "./images/fertilizer.jpg",
                "./images/compost.jpg"
            ],
            description:
                "Balanced growing medium designed for healthier roots and plants.",
            highlights: [
                "Balanced growing medium",
                "Supports healthy roots",
                "Suitable for container plants",
                "Beginner friendly"
            ],
            detailHeading:
                "Give Your Plants A Strong Growing Foundation",
            detailOne:
                "A suitable potting mix helps support healthy root development, drainage and consistent plant growth.",
            detailTwo:
                "Choose the right mix based on plant type, container size and growing environment.",
            specifications: [
                ["Type", "Potting Mix"],
                ["Use", "Container Gardening"],
                ["Drainage", "Balanced"],
                ["Application", "Indoor & Outdoor"],
                ["Care Level", "Easy"]
            ],
            care: [
                {
                    icon: "sprout",
                    title: "Application",
                    text: "Fill the planter with an even layer of potting mix."
                },
                {
                    icon: "droplets",
                    title: "Moisture",
                    text: "Maintain appropriate moisture for the plant type."
                },
                {
                    icon: "refresh-cw",
                    title: "Refresh",
                    text: "Replace or refresh the soil when necessary."
                },
                {
                    icon: "package",
                    title: "Storage",
                    text: "Keep unused mix sealed in a dry place."
                }
            ],
            related: [
                "premium-green-plant",
                "garden-compost",
                "plant-growth-fertilizer"
            ]
        },
        "seasonal-flower-seeds": {
            title: "Seasonal Flower Seeds",
            category: "Seeds",
            price: "₹149",
            oldPrice: "₹179",
            discount: "17% OFF",
            rating: "4.7",
            reviews: "(63 reviews)",
            badge: "Seasonal",
            image: "./images/seeds.jpg",
            thumbnails: [
                "./images/seeds.jpg",
                "./images/s1.jpg"
            ],
            description:
                "Easy-to-grow seasonal seeds for colorful flowers and garden beds.",
            highlights: [
                "Seasonal varieties",
                "Easy to grow",
                "Ideal for garden beds",
                "Suitable for beginners"
            ],
            detailHeading:
                "Grow A More Colorful Garden",
            detailOne:
                "Seasonal flower seeds are a simple way to introduce more color and variety into balcony pots, garden beds and home landscapes.",
            detailTwo:
                "Follow the recommended sowing depth, watering routine and light requirements for better results.",
            specifications: [
                ["Type", "Flower Seeds"],
                ["Growing", "Seasonal"],
                ["Placement", "Outdoor & Balcony"],
                ["Care Level", "Easy"],
                ["Use", "Flower Gardens"]
            ],
            care: [
                {
                    icon: "sprout",
                    title: "Sowing",
                    text: "Sow seeds according to the recommended depth."
                },
                {
                    icon: "droplets",
                    title: "Water",
                    text: "Keep the growing medium lightly moist."
                },
                {
                    icon: "sun",
                    title: "Light",
                    text: "Provide suitable sunlight for germination."
                },
                {
                    icon: "calendar",
                    title: "Season",
                    text: "Plant during the recommended growing season."
                }
            ],
            related: [
                "organic-potting-mix",
                "garden-compost",
                "premium-green-plant"
            ]
        },
        "plant-growth-fertilizer": {
            title: "Plant Growth Fertilizer",
            category: "Fertilizers",
            price: "₹349",
            oldPrice: "₹399",
            discount: "13% OFF",
            rating: "4.8",
            reviews: "(77 reviews)",
            badge: "Essential",
            image: "./images/fertilizer1.jpg",
            thumbnails: [
                "./images/fertilizer1.jpg",
                "./images/fertilizer.jpg"
            ],
            description:
                "Everyday plant nutrition for steady growth and healthy greenery.",
            highlights: [
                "Everyday plant nutrition",
                "Easy application",
                "Supports healthy growth",
                "Suitable for common plants"
            ],
            detailHeading:
                "Support Healthier Plant Growth",
            detailOne:
                "Balanced plant nutrition can support healthy foliage, stronger growth and better overall plant performance when used correctly.",
            detailTwo:
                "Always follow the recommended application amount for the specific plant and growing medium.",
            specifications: [
                ["Type", "Plant Fertilizer"],
                ["Application", "Routine Feeding"],
                ["Use", "Indoor & Outdoor"],
                ["Care Level", "Easy"],
                ["Suitable For", "Common Garden Plants"]
            ],
            care: [
                {
                    icon: "droplets",
                    title: "Application",
                    text: "Apply according to the recommended amount."
                },
                {
                    icon: "calendar",
                    title: "Routine",
                    text: "Maintain a consistent feeding schedule."
                },
                {
                    icon: "sprout",
                    title: "Plant Type",
                    text: "Choose feeding intervals based on the plant."
                },
                {
                    icon: "alert-circle",
                    title: "Care",
                    text: "Avoid excessive application."
                }
            ],
            related: [
                "organic-potting-mix",
                "garden-compost",
                "premium-green-plant"
            ]
        },
        "everyday-garden-tool-set": {
            title: "Everyday Garden Tool Set",
            category: "Garden Tools",
            price: "₹799",
            oldPrice: "₹899",
            discount: "11% OFF",
            rating: "4.8",
            reviews: "(105 reviews)",
            badge: "Value Set",
            image: "./images/garden tools.jpg",
            thumbnails: [
                "./images/garden tools.jpg",
                "./images/hanging.jpg"
            ],
            description:
                "Practical tools for planting, pruning and everyday plant care.",
            highlights: [
                "Useful everyday tools",
                "Planting support",
                "Pruning support",
                "Suitable for home gardening"
            ],
            detailHeading:
                "Everything You Need For Everyday Garden Care",
            detailOne:
                "A practical set of gardening tools makes planting, pruning, repotting and basic plant maintenance easier.",
            detailTwo:
                "Clean and dry tools after use to keep them ready for your next gardening task.",
            specifications: [
                ["Type", "Garden Tool Set"],
                ["Use", "Home Gardening"],
                ["Activities", "Planting & Pruning"],
                ["Maintenance", "Low"],
                ["Suitable For", "Beginners"]
            ],
            care: [
                {
                    icon: "sparkles",
                    title: "Cleaning",
                    text: "Clean tools after each gardening session."
                },
                {
                    icon: "droplets",
                    title: "Drying",
                    text: "Dry tools before storing them."
                },
                {
                    icon: "package",
                    title: "Storage",
                    text: "Store tools in a clean, dry location."
                },
                {
                    icon: "shield-check",
                    title: "Safety",
                    text: "Handle sharp gardening tools carefully."
                }
            ],
            related: [
                "hand-pruning-tool",
                "terracotta-garden-pot",
                "premium-green-plant"
            ]
        },
        "outdoor-garden-plant": {
            title: "Outdoor Garden Plant",
            category: "Plants",
            price: "₹699",
            oldPrice: "₹799",
            discount: "13% OFF",
            rating: "4.7",
            reviews: "(69 reviews)",
            badge: "Garden Favorite",
            image: "./images/outdoor.jpg",
            thumbnails: [
                "./images/outdoor.jpg",
                "./images/s3.jpg"
            ],
            description:
                "Hardy greenery selected for balconies, patios and outdoor spaces.",
            highlights: [
                "Outdoor friendly",
                "Suitable for balconies",
                "Hardy greenery",
                "Good decorative value"
            ],
            detailHeading:
                "Bring More Greenery Outdoors",
            detailOne:
                "Outdoor plants can transform balconies, patios, entrances and garden spaces with natural greenery and visual character.",
            detailTwo:
                "Choose a location with suitable sunlight and provide regular watering according to the plant's requirements.",
            specifications: [
                ["Type", "Outdoor Plant"],
                ["Placement", "Outdoor"],
                ["Care Level", "Easy"],
                ["Suitable For", "Balconies & Patios"],
                ["Light", "Bright Conditions"]
            ],
            care: [
                {
                    icon: "sun",
                    title: "Light",
                    text: "Provide the recommended amount of sunlight."
                },
                {
                    icon: "droplets",
                    title: "Water",
                    text: "Maintain a consistent watering routine."
                },
                {
                    icon: "wind",
                    title: "Placement",
                    text: "Consider wind and temperature conditions."
                },
                {
                    icon: "scissors",
                    title: "Maintenance",
                    text: "Trim damaged growth when required."
                }
            ],
            related: [
                "premium-green-plant",
                "seasonal-flower-seeds",
                "decorative-planter"
            ]
        },
        "decorative-planter": {
            title: "Decorative Planter",
            category: "Flower Pots",
            price: "₹699",
            oldPrice: "₹799",
            discount: "13% OFF",
            rating: "4.8",
            reviews: "(58 reviews)",
            badge: "Featured",
            image: "./images/designer pots.jpg",
            thumbnails: [
                "./images/designer pots.jpg",
                "./images/ceramic.jpg"
            ],
            description:
                "A versatile planter for indoor plants and stylish green corners.",
            highlights: [
                "Decorative design",
                "Indoor friendly",
                "Versatile planter",
                "Suitable for modern interiors"
            ],
            detailHeading:
                "Make Your Green Corners More Beautiful",
            detailOne:
                "Decorative planters help combine healthy plant growth with attractive interior styling.",
            detailTwo:
                "Choose the right plant size and make sure the planter has suitable drainage for healthy roots.",
            specifications: [
                ["Type", "Decorative Planter"],
                ["Placement", "Indoor"],
                ["Style", "Designer"],
                ["Maintenance", "Low"],
                ["Use", "Interior Planting"]
            ],
            care: [
                {
                    icon: "droplets",
                    title: "Drainage",
                    text: "Ensure suitable drainage for your plant."
                },
                {
                    icon: "sprout",
                    title: "Plant Size",
                    text: "Choose a plant proportionate to the planter."
                },
                {
                    icon: "sparkles",
                    title: "Cleaning",
                    text: "Clean the planter surface regularly."
                },
                {
                    icon: "move",
                    title: "Placement",
                    text: "Place it on a stable indoor surface."
                }
            ],
            related: [
                "monstera-indoor-plant",
                "modern-ceramic-pot",
                "premium-green-plant"
            ]
        },
        "garden-compost": {
            title: "Garden Compost",
            category: "Soil & Compost",
            price: "₹249",
            oldPrice: "₹299",
            discount: "17% OFF",
            rating: "4.7",
            reviews: "(54 reviews)",
            badge: "Organic",
            image: "./images/compost.jpg",
            thumbnails: [
                "./images/compost.jpg",
                "./images/fertilizer.jpg"
            ],
            description:
                "Organic matter for supporting fertile soil and healthy plant growth.",
            highlights: [
                "Organic matter",
                "Supports fertile soil",
                "Suitable for gardening",
                "Easy to use"
            ],
            detailHeading:
                "Build Healthier Soil Naturally",
            detailOne:
                "Garden compost can help improve soil structure and provide organic matter for a productive growing environment.",
            detailTwo:
                "Mix compost appropriately with your existing growing medium according to the needs of your plants.",
            specifications: [
                ["Type", "Garden Compost"],
                ["Use", "Soil Improvement"],
                ["Application", "Gardening"],
                ["Material", "Organic Matter"],
                ["Care Level", "Easy"]
            ],
            care: [
                {
                    icon: "sprout",
                    title: "Mixing",
                    text: "Blend into the growing medium evenly."
                },
                {
                    icon: "droplets",
                    title: "Moisture",
                    text: "Maintain appropriate soil moisture."
                },
                {
                    icon: "refresh-cw",
                    title: "Refresh",
                    text: "Reapply when soil needs organic enrichment."
                },
                {
                    icon: "package",
                    title: "Storage",
                    text: "Store in a dry protected place."
                }
            ],
            related: [
                "organic-potting-mix",
                "plant-growth-fertilizer",
                "seasonal-flower-seeds"
            ]
        },
        "hand-pruning-tool": {
            title: "Hand Pruning Tool",
            category: "Garden Tools",
            price: "₹399",
            oldPrice: "₹449",
            discount: "11% OFF",
            rating: "4.8",
            reviews: "(43 reviews)",
            badge: "Essential",
            image: "./images/hanging.jpg",
            thumbnails: [
                "./images/hanging.jpg",
                "./images/garden tools.jpg"
            ],
            description:
                "Compact pruning support for everyday plant and garden maintenance.",
            highlights: [
                "Compact design",
                "Practical pruning support",
                "Easy to handle",
                "Useful for routine care"
            ],
            detailHeading:
                "Keep Your Plants Neat And Healthy",
            detailOne:
                "A compact pruning tool makes routine trimming and plant maintenance easier for home gardeners.",
            detailTwo:
                "Keep the blades clean and dry after use for better long-term performance.",
            specifications: [
                ["Type", "Pruning Tool"],
                ["Use", "Garden Maintenance"],
                ["Design", "Compact"],
                ["Maintenance", "Low"],
                ["Suitable For", "Home Gardeners"]
            ],
            care: [
                {
                    icon: "sparkles",
                    title: "Cleaning",
                    text: "Wipe the blades after use."
                },
                {
                    icon: "droplets",
                    title: "Drying",
                    text: "Keep the tool dry to reduce corrosion."
                },
                {
                    icon: "shield-check",
                    title: "Safety",
                    text: "Store securely when not in use."
                },
                {
                    icon: "package",
                    title: "Storage",
                    text: "Keep in a clean and dry location."
                }
            ],
            related: [
                "everyday-garden-tool-set",
                "outdoor-garden-plant",
                "garden-compost"
            ]
        }
    };
    const relatedLookup = {
        "premium-green-plant": {
            image: "./images/p1.jpg",
            category: "Indoor Plants"
        },
        "monstera-indoor-plant": {
            image: "./images/monstra.jpg",
            category: "Indoor Plants"
        },
        "modern-ceramic-pot": {
            image: "./images/ceramic.jpg",
            category: "Flower Pots"
        },
        "terracotta-garden-pot": {
            image: "./images/clay.jpg",
            category: "Flower Pots"
        },
        "organic-potting-mix": {
            image: "./images/fertilizer.jpg",
            category: "Soil & Compost"
        },
        "seasonal-flower-seeds": {
            image: "./images/seeds.jpg",
            category: "Seeds"
        },
        "plant-growth-fertilizer": {
            image: "./images/fertilizer1.jpg",
            category: "Fertilizers"
        },
        "everyday-garden-tool-set": {
            image: "./images/garden tools.jpg",
            category: "Garden Tools"
        },
        "outdoor-garden-plant": {
            image: "./images/outdoor.jpg",
            category: "Plants"
        },
        "decorative-planter": {
            image: "./images/designer pots.jpg",
            category: "Flower Pots"
        },
        "garden-compost": {
            image: "./images/compost.jpg",
            category: "Soil & Compost"
        },
        "hand-pruning-tool": {
            image: "./images/hanging.jpg",
            category: "Garden Tools"
        }
    };
    function getProductKey() {
        const hash = window.location.hash
            .replace(/^#/, "")
            .trim()
            .toLowerCase();
        if (hash && products[hash]) {
            return hash;
        }
        return "premium-green-plant";
    }
    let currentKey = getProductKey();
    let currentProduct = products[currentKey];
    let quantity = 1;
    const elements = {
        title: document.getElementById("productTitle"),
        category: document.getElementById("productCategory"),
        price: document.getElementById("productPrice"),
        oldPrice: document.getElementById("productOldPrice"),
        discount: document.getElementById("productDiscount"),
        badge: document.getElementById("productBadge"),
        rating: document.getElementById("productRating"),
        reviews: document.getElementById("productReviews"),
        description: document.getElementById("productDescription"),
        highlights: document.getElementById("productHighlights"),
        mainImage: document.getElementById("mainProductImage"),
        thumbnails: document.getElementById("productThumbnails"),
        breadcrumb: document.getElementById("breadcrumbProduct"),
        detailHeading: document.getElementById("detailHeading"),
        detailOne: document.getElementById("detailDescriptionOne"),
        detailTwo: document.getElementById("detailDescriptionTwo"),
        specifications: document.getElementById("productSpecifications"),
        careGuide: document.getElementById("careGuide"),
        related: document.getElementById("relatedProducts"),
        quantityValue: document.getElementById("quantityValue"),
        quantityMinus: document.getElementById("quantityMinus"),
        quantityPlus: document.getElementById("quantityPlus"),
        addButton: document.querySelector(".product-add-btn"),
        buyButton: document.querySelector(".product-buy-now"),
        wishlistButton: document.querySelector(".product-wishlist")
    };
    function renderProduct() {
        currentProduct = products[currentKey];
        if (!currentProduct) {
            currentKey = "premium-green-plant";
            currentProduct = products[currentKey];
        }
        if (elements.title) {
            elements.title.textContent = currentProduct.title;
        }
        if (elements.category) {
            elements.category.textContent = currentProduct.category;
        }
        if (elements.price) {
            elements.price.textContent = currentProduct.price;
        }
        if (elements.oldPrice) {
            elements.oldPrice.textContent = currentProduct.oldPrice;
        }
        if (elements.discount) {
            elements.discount.textContent = currentProduct.discount;
        }
        if (elements.badge) {
            elements.badge.textContent = currentProduct.badge;
        }
        if (elements.rating) {
            elements.rating.textContent = currentProduct.rating;
        }
        if (elements.reviews) {
            elements.reviews.textContent = currentProduct.reviews;
        }
        if (elements.description) {
            elements.description.textContent =
                currentProduct.description;
        }
        if (elements.breadcrumb) {
            elements.breadcrumb.textContent =
                currentProduct.title;
        }
        if (elements.detailHeading) {
            elements.detailHeading.innerHTML =
                currentProduct.detailHeading;
        }
        if (elements.detailOne) {
            elements.detailOne.textContent =
                currentProduct.detailOne;
        }
        if (elements.detailTwo) {
            elements.detailTwo.textContent =
                currentProduct.detailTwo;
        }
        if (elements.mainImage) {
            elements.mainImage.src =
                currentProduct.image;
            elements.mainImage.alt =
                currentProduct.title;
        }
        renderHighlights();
        renderThumbnails();
        renderSpecifications();
        renderCare();
        renderRelated();
        quantity = 1;
        updateQuantity();
        refreshIcons();
    }
    function renderHighlights() {
        if (!elements.highlights) {
            return;
        }
        elements.highlights.innerHTML = "";
        currentProduct.highlights.forEach(function (item) {
            const element =
                document.createElement("div");
            element.className =
                "product-highlight-item";
            element.innerHTML = `
                <i data-lucide="check"></i>
                <span>${item}</span>
            `;
            elements.highlights.appendChild(element);
        });
    }
    function renderThumbnails() {
        if (!elements.thumbnails) {
            return;
        }
        elements.thumbnails.innerHTML = "";
        currentProduct.thumbnails.forEach(
            function (image, index) {
                const button =
                    document.createElement("button");
                button.type = "button";
                button.className =
                    "product-thumbnail" +
                    (index === 0 ? " active" : "");
                button.setAttribute(
                    "aria-label",
                    `View image ${index + 1}`
                );
                const img =
                    document.createElement("img");
                img.src = image;
                img.alt =
                    `${currentProduct.title} image ${index + 1}`;
                button.appendChild(img);
                button.addEventListener(
                    "click",
                    function () {
                        if (elements.mainImage) {
                            elements.mainImage.src =
                                image;
                        }
                        document
                            .querySelectorAll(
                                ".product-thumbnail"
                            )
                            .forEach(function (item) {
                                item.classList.remove(
                                    "active"
                                );
                            });
                        button.classList.add("active");
                    }
                );
                elements.thumbnails.appendChild(button);
            }
        );
    }
    function renderSpecifications() {
        if (!elements.specifications) {
            return;
        }
        elements.specifications.innerHTML = "";
        currentProduct.specifications.forEach(
            function (spec) {
                const row =
                    document.createElement("div");
                row.className =
                    "product-specification-row";
                row.innerHTML = `
                    <span>${spec[0]}</span>
                    <strong>${spec[1]}</strong>
                `;
                elements.specifications.appendChild(row);
            }
        );
    }
    function renderCare() {
        if (!elements.careGuide) {
            return;
        }
        elements.careGuide.innerHTML = "";
        currentProduct.care.forEach(
            function (item) {
                const card =
                    document.createElement("article");
                card.className =
                    "product-care-card";
                card.innerHTML = `
                    <div class="product-care-icon">
                        <i data-lucide="${item.icon}"></i>
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                `;
                elements.careGuide.appendChild(card);
            }
        );
    }
    function renderRelated() {
        if (!elements.related) {
            return;
        }
        elements.related.innerHTML = "";
        currentProduct.related.forEach(
            function (key) {
                const product =
                    products[key];
                const meta =
                    relatedLookup[key];
                if (!product || !meta) {
                    return;
                }
                const article =
                    document.createElement("article");
                article.className =
                    "related-product-card";
                article.innerHTML = `
                    <div class="related-product-image">
                        <img
                            src="${meta.image}"
                            alt="${product.title}"
                            loading="lazy"
                        >
                    </div>
                    <div class="related-product-content">
                        <span>
                            ${meta.category}
                        </span>
                        <h3>
                            ${product.title}
                        </h3>
                        <p>
                            ${product.description}
                        </p>
                        <a
                            href="product-details.html#${key}"
                            class="related-product-link"
                        >
                            View Product
                            <i data-lucide="arrow-right"></i>
                        </a>
                    </div>
                `;
                elements.related.appendChild(article);
            }
        );
        refreshIcons();
    }
    function updateQuantity() {
        if (elements.quantityValue) {
            elements.quantityValue.textContent =
                quantity;
        }
    }
    if (elements.quantityMinus) {
        elements.quantityMinus.addEventListener(
            "click",
            function () {
                if (quantity > 1) {
                    quantity--;
                    updateQuantity();
                }
            }
        );
    }
    if (elements.quantityPlus) {
        elements.quantityPlus.addEventListener(
            "click",
            function () {
                if (quantity < 20) {
                    quantity++;
                    updateQuantity();
                }
            }
        );
    }
    function addToCart() {
        const cart =
            JSON.parse(
                localStorage.getItem(
                    "bloomnestCart"
                )
            ) || [];
        const existing =
            cart.find(
                item =>
                    item.id === currentKey
            );
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({
                id: currentKey,
                name: currentProduct.title,
                price: currentProduct.price,
                image: currentProduct.image,
                quantity: quantity
            });
        }
        localStorage.setItem(
            "bloomnestCart",
            JSON.stringify(cart)
        );
        showMessage(
            `${currentProduct.title} added to your cart.`
        );
    }
    if (elements.addButton) {
        elements.addButton.addEventListener(
            "click",
            function () {
                addToCart();
            }
        );
    }
    if (elements.buyButton) {
        elements.buyButton.addEventListener(
            "click",
            function () {
                addToCart();
                window.location.href =
                    "contact.html";
            }
        );
    }
    if (elements.wishlistButton) {
        elements.wishlistButton.addEventListener(
            "click",
            function () {
                const wishlist =
                    JSON.parse(
                        localStorage.getItem(
                            "bloomnestWishlist"
                        )
                    ) || [];
                const exists =
                    wishlist.includes(
                        currentKey
                    );
                if (exists) {
                    const updated =
                        wishlist.filter(
                            item =>
                                item !== currentKey
                        );
                    localStorage.setItem(
                        "bloomnestWishlist",
                        JSON.stringify(updated)
                    );
                    elements.wishlistButton.classList.remove(
                        "active"
                    );
                    showMessage(
                        "Removed from wishlist."
                    );
                } else {
                    wishlist.push(currentKey);
                    localStorage.setItem(
                        "bloomnestWishlist",
                        JSON.stringify(wishlist)
                    );
                    elements.wishlistButton.classList.add(
                        "active"
                    );
                    showMessage(
                        "Added to wishlist."
                    );
                }
            }
        );
    }
    function updateWishlistState() {
        if (!elements.wishlistButton) {
            return;
        }
        const wishlist =
            JSON.parse(
                localStorage.getItem(
                    "bloomnestWishlist"
                )
            ) || [];
        elements.wishlistButton.classList.toggle(
            "active",
            wishlist.includes(currentKey)
        );
    }
    function showMessage(message) {
        let toast =
            document.querySelector(
                ".product-detail-toast"
            );
        if (!toast) {
            toast =
                document.createElement("div");
            toast.className =
                "product-detail-toast";
            document.body.appendChild(toast);
        }
        toast.textContent =
            message;
        toast.classList.add("show");
        clearTimeout(
            toast.hideTimer
        );
        toast.hideTimer =
            setTimeout(function () {
                toast.classList.remove("show");
            }, 2600);
    }
    const faqItems =
        document.querySelectorAll(
            ".product-faq-item"
        );
    faqItems.forEach(function (item) {
        const button =
            item.querySelector(
                ".product-faq-question"
            );
        if (!button) {
            return;
        }
        button.addEventListener(
            "click",
            function () {
                const isActive =
                    item.classList.contains(
                        "active"
                    );
                faqItems.forEach(
                    function (otherItem) {
                        otherItem.classList.remove(
                            "active"
                        );
                    }
                );
                if (!isActive) {
                    item.classList.add(
                        "active"
                    );
                }
                refreshIcons();
            }
        );
    });
    window.addEventListener(
        "hashchange",
        function () {
            const newKey =
                getProductKey();
            if (newKey !== currentKey) {
                currentKey =
                    newKey;
                renderProduct();
                updateWishlistState();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    );
    document.addEventListener(
        "click",
        function (event) {
            const link =
                event.target.closest(
                    'a[href^="#"]'
                );
            if (!link) {
                return;
            }
            const targetId =
                link.getAttribute("href");
            if (!targetId || targetId === "#") {
                return;
            }
            const target =
                document.querySelector(
                    targetId
                );
            if (!target) {
                return;
            }
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    );
    window.addEventListener(
        "load",
        function () {
            const loader =
                document.getElementById(
                    "pageLoader"
                );
            if (!loader) {
                return;
            }
            loader.classList.add(
                "loaded"
            );
            setTimeout(
                function () {
                    loader.style.display =
                        "none";
                },
                500
            );
        }
    );
    renderProduct();
    updateWishlistState();
    refreshIcons();
});