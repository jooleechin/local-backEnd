exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('places').del()
    .then(function() {
      // Inserts seed entries
      return knex('places').insert([{
          id: 1,
          name: 'Pizza Pro',
          address: '108 Occidental Ave S, Seattle, WA 98104',
          lat: -33.8666199,
          long: 151.1958527,
          phone: '(206) 623-5057',
          type: 'food',
          hours: JSON.stringify([
            {
              "close": {
                "day": 1,
                "time": "1700"
              },
              "open": {
                "day": 1,
                "time": "1000"
              }
            },
            {
              "close": {
                "day": 2,
                "time": "1700"
              },
              "open": {
                "day": 2,
                "time": "1000"
              }
            },
            {
              "close": {
                "day": 3,
                "time": "1700"
              },
              "open": {
                "day": 3,
                "time": "1000"
              }
            },
            {
              "close": {
                "day": 4,
                "time": "1700"
              },
              "open": {
                "day": 4,
                "time": "1000"
              }
            },
            {
              "close": {
                "day": 5,
                "time": "1700"
              },
              "open": {
                "day": 5,
                "time": "1000"
              }
            }
          ]),
          photo: JSON.stringify([{
              "height": 1184,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/106645265231048995466/photos\">Malik Ahamed</a>"
              ],
              "photo_reference": "CmRaAAAAaGuX5X7g34eOfhaDXx975HTGu5_0XQP7PBYH2BUKkXfweZ-Q-xnOplfv76XsKurj0poz-uqzmzheNxQ91YpSI72LjMg2trB5u7KsBTh2ksRj_WbQw1hwX2GXGoAf7--CEhDl_yPE3zzkdBSJIqux91nIGhR_lsW2hvxQ6ju3c_ZfIXiUAv-6qA",
              "width": 1776
            },
            {
              "height": 1152,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/102416590950062028240/photos\">cj juszczak</a>"
              ],
              "photo_reference": "CmRaAAAAOWZQGDpZO15-j7o8F-zuMShvRzEhwkWhcIY5CvXGZ3CK6kLDe6icCfEpaJETojCGfiq7LDgbh19hY7BsSuPxRkaWIRhplSJxATcCLrclv6e0vZD89rg56EaGgJGxg55eEhCYdPB0W2JHaxxJ3_lwz15ZGhTfYOgFSLChz8WBeEMKqfxOYnxksQ",
              "width": 2048
            }
          ]),
          rating: 2,
          reviews: JSON.stringify([{
              "author_name": "Rob Cattral",
              "author_url": "https://www.google.com/maps/contrib/104821479927114942406/reviews",
              "language": "en",
              "profile_photo_url": "https://lh6.googleusercontent.com/-hcAvKc-51lA/AAAAAAAAAAI/AAAAAAAAAHE/2VozlZ5cZW8/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
              "rating": 2,
              "relative_time_description": "in the last week",
              "text": "I was trying ti get a hold of my friend who works there and it was a nightmare.\n\nThey have no internal phone system and therefore no extensions.\n\nI wanted to leave a message for him, but they have a No Names policy, so they could not write anything down.\n\nIt might be a great pkace to work... as long as you are a hermit.",
              "time": 1522372508
            },
            {
              "author_name": "Katherine Mayer",
              "author_url": "https://www.google.com/maps/contrib/115406537970676059412/reviews",
              "language": "en",
              "profile_photo_url": "https://lh4.googleusercontent.com/-gIdZDSHIqvk/AAAAAAAAAAI/AAAAAAAAAAA/ACLGyWC6r1jGntjMKbY2x3-4kabsZrMECQ/s128-c0x00000000-cc-rp-mo/photo.jpg",
              "rating": 1,
              "relative_time_description": "a month ago",
              "text": "It may be a great place to work - but customer service is totally non existent! Google only is what it is because it has a total monopoly on what they do. I have been trying for DAYS to get assistance, and everyone tells me it is someone else's problem, or they just ignore my emails - and that is if I can get someone on a phone. It is disgraceful.",
              "time": 1519253934
            }
          ])
        },

        {
          id: 2,
          name: 'Elemental Pizza',
          address: '701 5th Ave, Seattle, WA 98104',
          lat: -33.8666199,
          long: 151.1958527,
          phone: '(206) 623-5057',
          type: 'food',
          hours: JSON.stringify([
            {
              "close": {
                "day": 1,
                "time": "1700"
              },
              "open": {
                "day": 1,
                "time": "1000"
              }
            },
            {
              "close": {
                "day": 2,
                "time": "1700"
              },
              "open": {
                "day": 2,
                "time": "1000"
              }
            },
            {
              "close": {
                "day": 3,
                "time": "1700"
              },
              "open": {
                "day": 3,
                "time": "1000"
              }
            },
            {
              "close": {
                "day": 4,
                "time": "1700"
              },
              "open": {
                "day": 4,
                "time": "1000"
              }
            },
            {
              "close": {
                "day": 5,
                "time": "1700"
              },
              "open": {
                "day": 5,
                "time": "1000"
              }
            }
          ]),
          photo: JSON.stringify([{
              "height": 1184,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/106645265231048995466/photos\">Malik Ahamed</a>"
              ],
              "photo_reference": "CmRaAAAAaGuX5X7g34eOfhaDXx975HTGu5_0XQP7PBYH2BUKkXfweZ-Q-xnOplfv76XsKurj0poz-uqzmzheNxQ91YpSI72LjMg2trB5u7KsBTh2ksRj_WbQw1hwX2GXGoAf7--CEhDl_yPE3zzkdBSJIqux91nIGhR_lsW2hvxQ6ju3c_ZfIXiUAv-6qA",
              "width": 1776
            },
            {
              "height": 1152,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/102416590950062028240/photos\">cj juszczak</a>"
              ],
              "photo_reference": "CmRaAAAAOWZQGDpZO15-j7o8F-zuMShvRzEhwkWhcIY5CvXGZ3CK6kLDe6icCfEpaJETojCGfiq7LDgbh19hY7BsSuPxRkaWIRhplSJxATcCLrclv6e0vZD89rg56EaGgJGxg55eEhCYdPB0W2JHaxxJ3_lwz15ZGhTfYOgFSLChz8WBeEMKqfxOYnxksQ",
              "width": 2048
            }
          ]),
          rating: 5,
          reviews: JSON.stringify([{
              "author_name": "Rob Cattral",
              "author_url": "https://www.google.com/maps/contrib/104821479927114942406/reviews",
              "language": "en",
              "profile_photo_url": "https://lh6.googleusercontent.com/-hcAvKc-51lA/AAAAAAAAAAI/AAAAAAAAAHE/2VozlZ5cZW8/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
              "rating": 2,
              "relative_time_description": "in the last week",
              "text": "I was trying ti get a hold of my friend who works there and it was a nightmare.\n\nThey have no internal phone system and therefore no extensions.\n\nI wanted to leave a message for him, but they have a No Names policy, so they could not write anything down.\n\nIt might be a great pkace to work... as long as you are a hermit.",
              "time": 1522372508
            },
            {
              "author_name": "Katherine Mayer",
              "author_url": "https://www.google.com/maps/contrib/115406537970676059412/reviews",
              "language": "en",
              "profile_photo_url": "https://lh4.googleusercontent.com/-gIdZDSHIqvk/AAAAAAAAAAI/AAAAAAAAAAA/ACLGyWC6r1jGntjMKbY2x3-4kabsZrMECQ/s128-c0x00000000-cc-rp-mo/photo.jpg",
              "rating": 1,
              "relative_time_description": "a month ago",
              "text": "It may be a great place to work - but customer service is totally non existent! Google only is what it is because it has a total monopoly on what they do. I have been trying for DAYS to get assistance, and everyone tells me it is someone else's problem, or they just ignore my emails - and that is if I can get someone on a phone. It is disgraceful.",
              "time": 1519253934
            }
          ])
        }
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('places_id_seq', (SELECT MAX(id) FROM places))`
      )
    })
};
