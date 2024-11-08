import path from 'path';
import fs from 'fs/promises';
import { router, procedure } from '@/server/trpc';
import { z } from 'zod';

export const videoRouter = router({
  getVideos: procedure.query(async () => {
    const filePath = path.join(process.cwd(), 'src/mocks/videoData.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    return data;
  }),

  incrementView: procedure
    .input(z.object({ videoId: z.number() }))
    .mutation(async ({ input }) => {
      const filePath = path.join(process.cwd(), 'src/mocks/videoData.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const videoData = JSON.parse(fileContent);

      const videoIndex = videoData.findIndex((v) => v.id === input.videoId);
      if (videoIndex === -1) throw new Error('Video not found');

      videoData[videoIndex].views += 1;

      // Puedes agregar lógica para guardar cambios si es necesario
      return { success: true, video: videoData[videoIndex] };
    }),

  incrementLike: procedure
    .input(z.object({ videoId: z.number() }))
    .mutation(async ({ input }) => {
      const filePath = path.join(process.cwd(), 'src/mocks/videoData.json');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const videoData = JSON.parse(fileContent);

      const videoIndex = videoData.findIndex((v) => v.id === input.videoId);
      if (videoIndex === -1) throw new Error('Video not found');

      const video = videoData[videoIndex];
      video.likes += video.likedByUser ? -1 : 1;
      video.likedByUser = !video.likedByUser;

      // Puedes agregar lógica para guardar cambios si es necesario
      return { success: true, video };
    }),
});
