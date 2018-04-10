using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCAppGraph.Models
{
    public class DisplayMessage
    {
        public string Subject { get; set; }
        public DateTimeOffset ReceivedDateTime { get; set; }
        public string From { get; set; }

        public DisplayMessage(string subject, DateTimeOffset dateTimeReceived, string from)
        {
            this.Subject = subject;
            this.ReceivedDateTime = (DateTimeOffset)dateTimeReceived;
            this.From = from;
        }
    }
}