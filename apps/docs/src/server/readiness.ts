import { IsReady } from '@not-govuk/engine';

// Return false when upstream dependencies are unavailable
export const isReady: IsReady = () => true;

export default isReady;
