const data = [
  {
    id: crypto.randomUUID(),
    cover: "https://m.media-amazon.com/images/I/81qfJA-KvML._SY466_.jpg",
    title: "Eternal Wisdom",
    description:
      '"Eternal Wisdom" is a profound exploration of Stoic philosophy as a practical guide to living a meaningful and fulfilling life in the modern world. Drawing from ancient wisdom and timeless principles, this book offers readers a comprehensive roadmap to personal growth, resilience, and inner peace.',
    genre: "Philosophy/Self-Help/Stoicism",
    rating: 5,
    price: 350,
    createdAt: "2025-06-07",
  },
  {
    id: crypto.randomUUID(),
    cover: "https://m.media-amazon.com/images/I/31alvJ85h2L._SY445_SX342_.jpg",
    title: "Echoes Of The Storms",
    description:
      "If you're ready to break free from the chains of self-doubt, anxiety, and confusion, and unlock the limitless potential within you, then this book is your essential companion on the path to self-mastery.",
    genre: "Philosophy/Self-Help/Stoicism",
    rating: 5,
    price: 200,
    createdAt: "2025-05-14",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
    title: "House of Sky",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
    createdAt: "2024-06-07",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg",
    title: "Book Lovers",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
    createdAt: "2024-05-14",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1649848581i/60435878.jpg",
    title: "Carrie Soto Is Back",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
    createdAt: "2024-05-30",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626710416i/58446227.jpg",
    title: "Sea of Tranquility",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
    createdAt: "2024-06-10",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg",
    title: "Hidden Pictures",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
    createdAt: "2024-05-19",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634068432i/59233594.jpg",
    title: "The Final Gambit",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
    createdAt: "2024-04-19",
    upcoming: true,
  },
];

function getAllBooks() {
  return data;
}

export { getAllBooks };
