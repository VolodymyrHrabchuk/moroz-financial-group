// lib/rateLimiter.js
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Define the rate limiter configuration
const rateLimiter = new RateLimiterMemory({
  points: 5, // Number of allowed requests
  duration: 60, // Per 60 seconds by IP
  blockDuration: 60, // Block for 60 seconds if consumed more than points
});

export default rateLimiter;
