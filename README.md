# Open Product Problems

A curated collection of product management problems to help you practice skills, trial frameworks and prepare for interviews. It's ok to fail here. 

## Features

- Product management problems that are abstracted from various real world companies and domains
- Detailed problem descriptions with context and data
- Suggested frameworks and approaches
- Community solutions and discussions
- Difficulty levels and categories for easy navigation

## Contributing

We welcome contributions from the community! You can contribute in two ways:

### 1. Share a Product Problem

To share a new product problem, create a new entry in `src/data/problemsData.ts`. Here's a template you can use:

```typescript
// Add this to the problemsData array
{
  id: "your-problem-id", // e.g., "spotify-discovery"
  title: "Your Problem Title",
  description: "A brief description of the problem",
  difficulty: "easy" | "medium" | "hard",
  company: "Company Name",
  categories: ["category-1", "category-2"], // e.g., ["feature-prioritization", "user-growth"]
  frameworks: ["Framework 1", "Framework 2"], // e.g., ["RICE", "MoSCoW"]
  background: `Detailed background information about the problem.
    You can include multiple paragraphs.
    Use template literals for formatting.`,
  keyQuestions: [
    "Key question 1?",
    "Key question 2?",
    "Key question 3?"
  ],
  data: [
    {
      title: "Data Point 1",
      content: "Description of the data point"
    },
    {
      title: "Data Point 2",
      content: "Description of the data point"
    }
  ],
  resources: [
    {
      title: "Resource Title",
      url: "https://resource-url.com",
      type: "article" | "video" | "case-study"
    }
  ],
  approach: `Suggested approach to solving the problem.
    You can include multiple paragraphs.
    Use template literals for formatting.`
}

// Add this to the problemsDetails object
"your-problem-id": {
  // Same content as above, plus:
  solutions: [
    {
      id: "solution-1",
      title: "Solution Title",
      description: "Brief description of the solution",
      author: "Author Name",
      author_url: "https://example.com/author-profile",
      date: "2024-03-20",
      url: "https://solution-url.com"
    }
  ]
}
```

### 2. Share a Solution

To share a solution to an existing problem, add it to the `solutions` array in the corresponding problem's details in `src/data/problemsData.ts`:

```typescript
// Add this to the solutions array of the problem
{
  id: "your-solution-id",
  title: "Your Solution Title",
  description: "A brief description of your solution approach",
  author: "Your Name",
  date: "2024-03-20", // Use YYYY-MM-DD format
  url: "https://your-solution-url.com" // Link to your detailed solution
}
```

### Submission Process

1. Fork the repository
2. Create a new branch for your contribution
3. Add your problem or solution following the templates above
4. Submit a pull request with a clear description of your contribution

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Created by Suraj Rai - [Website](https://www.surajr.com/)
