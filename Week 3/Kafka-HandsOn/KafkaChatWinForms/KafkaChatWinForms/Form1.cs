using Confluent.Kafka;

namespace KafkaChatWinForms


{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void txtMessage_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnSend_Click(object sender, EventArgs e)
        {
            var config = new ProducerConfig
            {
                BootstrapServers = "localhost:9092"
            };

            using var producer = new ProducerBuilder<Null, string>(config).Build();

            string message = txtMessage.Text;

            producer.Produce("chat-topic", new Message<Null, string>
            {
                Value = message
            });

            lstMessages.Items.Add("Me: " + message);

            txtMessage.Clear();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            Task.Run(() =>
            {
                var config = new ConsumerConfig
                {
                    BootstrapServers = "localhost:9092",
                    GroupId = "winforms-group",
                    AutoOffsetReset = AutoOffsetReset.Earliest
                };

                using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();

                consumer.Subscribe("chat-topic");

                while (true)
                {
                    var result = consumer.Consume();

                    Invoke(() =>
                    {
                        lstMessages.Items.Add(result.Message.Value);
                    });
                }
            });
        }
    }
}
