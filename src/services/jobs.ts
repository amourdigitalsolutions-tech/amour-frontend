const BASE_URL = 'http://127.0.0.1:8000/api';

export const getJobPostings = async () => {
  const token = localStorage.getItem('access_token');
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}/recruitment/job-postings/`, {
    headers
  });

  if (!response.ok) {
    throw new Error('Failed to fetch job postings');
  }
  return response.json();
};

export const getJobDetails = async (id: string) => {
  const token = localStorage.getItem('access_token');
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}/recruitment/job-postings/${id}/`, {
    headers
  });

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

  const response = await fetch(`${BASE_URL}/recruitment/job-applications/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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
