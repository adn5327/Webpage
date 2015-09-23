#include <stdio.h>
#include <pthread.h>
#include <signal.h>
#include <semaphore.h>

sem_t s;

void handler(int signal)
{
    sem_post(&s); // post a free pizza slice! 
    // be good! No printf-ing inside the signal handler
}

void *singsong(void *param)
{
    sem_wait(&s); // wait to eat one pizza slice
    printf("Yo ho ho ho a pirates life for me!\n");
}

int main()
{
    // unnamed semaphores are unsupported by OSX!
    // Create a semaphore with zero pizza slices - our singsong method will be forced to wait...
    
    if( sem_init(&s, 0, 0) == -1) {
       perror("sem_init failed-are you on a Mac?"); 
       return 1;
    }

    // Cheat here (we should be using sigaction in a mulithreaded program)
    signal(SIGINT, handler);

    pthread_t tid;
    pthread_create(&tid, NULL, singsong, NULL);
    pthread_exit(NULL);
}
