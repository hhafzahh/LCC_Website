# LCC 2025

## About LCC
The Learning Celebration Carnival (LCC) is SUTD’s annual event, organized by ROOT in collaboration with the Office of Education for the student community. In 2025, I volunteered as part of a team that developed the official event website, which included a live countdown, event details, and an API to support a custom lucky draw game designed for the celebration.

## How it works
1. Participants cast their vote for their favorite poster through a Microsoft Form.
2. Upon submission, their student ID and a randomly generated passcode are stored in a Supabase-hosted database.
3. They receive an email with the passcode and instructions to log in to the lucky draw game using both their student ID and the passcode.
4. After completing the game, their lucky draw chances are calculated based on their final score, with bonus chances awarded to the first 50 early registrants.

### Technical Details
This is a mock version of the the actual website: [https://lcc.sutd.edu.sg](https://lcc.sutd.edu.sg)
  - Frontend : Developed with SvelteKit (Svelte 5) and Tailwind CSS.
  - Backend : Developed with Sveltekit, Supabase and Microsoft Power Automate


