import { API_BASE_URL as BASE_URL } from './api';
import { fetchWithAuth } from './auth';

export const getJobPostings = async () => {
  const response = await fetchWithAuth(`${BASE_URL}/recruitment/job-postings/`);

  if (!response.ok) {
    throw new Error('Failed to fetch job postings');
  }
  return response.json();
};

export const getJobDetails = async (id: string) => {
  const response = await fetchWithAuth(`${BASE_URL}/recruitment/job-postings/${id}/`);

  if (!response.ok) {
    throw new Error('Failed to fetch job details');
  }
  return response.json();
};

export const applyForJob = async (jobId: string, notes: string = '') => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    throw new Error('Please log in to apply for driver positions.');
  }

  const response = await fetchWithAuth(`${BASE_URL}/recruitment/job-applications/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      job_posting: jobId,
      notes
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => null);
    throw new Error(err?.detail || 'Failed to submit application');
  }
  return response.json();
};
